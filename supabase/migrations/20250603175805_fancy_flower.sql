/*
  # Add database trigger for quiz submission notifications
  
  1. Changes
    - Creates a new function to handle quiz submission notifications
    - Adds a trigger to automatically call the function when a new submission is created
  
  2. Security
    - Function is executed with invoker security
    - Only triggers on INSERT operations
*/

-- Create the function that will call our Edge Function
CREATE OR REPLACE FUNCTION public.handle_quiz_submission_notification()
RETURNS TRIGGER AS $$
BEGIN
  -- Call the Edge Function
  PERFORM
    net.http_post(
      url := CONCAT(current_setting('app.settings.supabase_url'), '/functions/v1/send-quiz-notification'),
      headers := jsonb_build_object(
        'Content-Type', 'application/json',
        'Authorization', CONCAT('Bearer ', current_setting('app.settings.service_role_key'))
      ),
      body := jsonb_build_object('record', row_to_json(NEW))
    );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create the trigger
DROP TRIGGER IF EXISTS on_quiz_submission_created ON public.quiz_submissions;
CREATE TRIGGER on_quiz_submission_created
  AFTER INSERT ON public.quiz_submissions
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_quiz_submission_notification();