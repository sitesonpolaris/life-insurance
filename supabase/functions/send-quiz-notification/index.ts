import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.7';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface EmailPayload {
  to: string;
  subject: string;
  html: string;
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const supabase = createClient(
      Deno.env.get('SUPABASE_URL') ?? '',
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? ''
    );

    // Get the request payload
    const payload = await req.json();
    const { record } = payload;

    if (!record) {
      throw new Error('No record provided');
    }

    // Create customer email content
    const customerEmail: EmailPayload = {
      to: record.email,
      subject: 'Your Insurance Consultation Appointment',
      html: `
        <h2>Thank you for scheduling a consultation!</h2>
        <p>Dear ${record.name},</p>
        <p>Your consultation has been scheduled for ${record.weekday} at ${record.time} EST.</p>
        <p>One of our insurance experts will contact you at the provided phone number: ${record.phone}</p>
        ${record.message ? `<p>Your message: "${record.message}"</p>` : ''}
        <p>If you need to reschedule, please call us at (302)333-1456.</p>
        <br>
        <p>Best regards,</p>
        <p>The SecureLife Team</p>
      `
    };

    // Create admin email content
    const adminEmail: EmailPayload = {
      to: 'mr.shepeard@gmail.com',
      subject: 'New Insurance Consultation Request',
      html: `
        <h2>New Consultation Request</h2>
        <p>Client Details:</p>
        <ul>
          <li>Name: ${record.name}</li>
          <li>Email: ${record.email}</li>
          <li>Phone: ${record.phone}</li>
          <li>Preferred Day: ${record.weekday}</li>
          <li>Preferred Time: ${record.time} EST</li>
          ${record.message ? `<li>Message: ${record.message}</li>` : ''}
        </ul>
        <h3>Quiz Answers:</h3>
        <pre>${JSON.stringify(record.quiz_answers, null, 2)}</pre>
      `
    };

    // Send emails using Resend
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    const sendEmail = async (emailPayload: EmailPayload) => {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'SecureLife Insurance <notifications@securelife.com>',
          ...emailPayload,
        }),
      });

      if (!response.ok) {
        throw new Error(`Failed to send email: ${response.statusText}`);
      }

      return response.json();
    };

    // Send both emails
    await Promise.all([
      sendEmail(customerEmail),
      sendEmail(adminEmail),
    ]);

    return new Response(
      JSON.stringify({ message: 'Notification emails sent successfully' }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error sending notification:', error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 500,
      }
    );
  }
});