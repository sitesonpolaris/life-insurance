/*
  # Create Quiz Submissions Table

  1. New Tables
    - `quiz_submissions`
      - `id` (uuid, primary key)
      - `name` (text)
      - `email` (text)
      - `phone` (text)
      - `weekday` (text)
      - `time` (text)
      - `message` (text)
      - `quiz_answers` (jsonb)
      - `created_at` (timestamptz)

  2. Security
    - Enable RLS on `quiz_submissions` table
    - Add policy for authenticated users to read their own data
    - Add policy for public to create submissions
*/

CREATE TABLE IF NOT EXISTS quiz_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  weekday text NOT NULL,
  time text NOT NULL,
  message text,
  quiz_answers jsonb NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE quiz_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to create a submission
CREATE POLICY "Anyone can create quiz submissions"
  ON quiz_submissions
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Only authenticated users can view their own submissions
CREATE POLICY "Users can view their own submissions"
  ON quiz_submissions
  FOR SELECT
  TO authenticated
  USING (email = auth.jwt() ->> 'email');