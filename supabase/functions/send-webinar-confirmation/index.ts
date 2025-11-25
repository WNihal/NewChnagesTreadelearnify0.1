import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface WebinarRegistration {
  name: string;
  email: string;
  whatsapp_number: string;
  city: string;
  registration_id: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, whatsapp_number, city, registration_id }: WebinarRegistration = await req.json();

    // Email content
    const emailSubject = "You Are Successfully Registered for the Webinar!";
    const emailBody = `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          .header { background: linear-gradient(135deg, #059669 0%, #10b981 100%); color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
          .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
          .info-box { background: white; padding: 20px; margin: 20px 0; border-left: 4px solid #059669; border-radius: 5px; }
          .button { display: inline-block; background: #059669; color: white; padding: 15px 30px; text-decoration: none; border-radius: 5px; margin: 20px 0; }
          .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>🎉 Registration Confirmed!</h1>
            <p>Welcome to The Trade Learnify Academy Webinar</p>
          </div>
          <div class="content">
            <p>Dear ${name},</p>
            <p>Congratulations! Your registration for our exclusive <strong>Live Educational Workshop</strong> has been successfully confirmed.</p>
            
            <div class="info-box">
              <h3>📅 Webinar Details</h3>
              <p><strong>Topic:</strong> Learn Crypto, Forex & Commodities - From Data to Financial Freedom</p>
              <p><strong>Date:</strong> [TBA - You will receive the date via WhatsApp]</p>
              <p><strong>Time:</strong> [TBA - You will receive the time via WhatsApp]</p>
              <p><strong>Platform:</strong> Zoom (Live Session)</p>
              <p><strong>Language:</strong> Hindi</p>
            </div>

            <div class="info-box">
              <h3>🔗 Zoom Link</h3>
              <p>Your unique Zoom meeting link will be shared with you 24 hours before the webinar via:</p>
              <ul>
                <li>Email (${email})</li>
                <li>WhatsApp (+91 ${whatsapp_number})</li>
              </ul>
              <p><strong>Note:</strong> Please keep checking your email and WhatsApp for the meeting link.</p>
            </div>

            <div class="info-box">
              <h3>📚 What to Expect</h3>
              <ul>
                <li>✅ Crypto Trading Mastery techniques</li>
                <li>✅ Forex Market insights and strategies</li>
                <li>✅ Commodity Trading fundamentals</li>
                <li>✅ Live Trading Sessions demonstration</li>
                <li>✅ Q&A with industry experts</li>
                <li>✅ Exclusive trading resources</li>
              </ul>
            </div>

            <div class="info-box">
              <h3>📞 Need Help?</h3>
              <p>If you have any questions or need assistance, feel free to reach out:</p>
              <p><strong>WhatsApp Support:</strong> <a href="https://wa.me/919373228941">+91 9373228941</a></p>
              <p><strong>Email:</strong> thetradelearnify@gmail.com</p>
              <p><strong>Phone:</strong> +91 9373228941 / +91 7972299513</p>
            </div>

            <p style="margin-top: 30px;">We're excited to have you join us on this journey to financial freedom!</p>
            
            <p><strong>Best Regards,</strong><br>
            The Trade Learnify Academy Team</p>
            
            <div style="text-align: center; margin-top: 30px;">
              <a href="https://wa.me/919373228941" class="button">Contact Us on WhatsApp</a>
            </div>
          </div>
          <div class="footer">
            <p>The Trade Learnify Academy</p>
            <p>M-2 Shreyash Apartment, Aath Rasta Square, Laxmi Nagar, Nagpur 440022</p>
            <p>This is an automated email. Please do not reply directly to this message.</p>
          </div>
        </div>
      </body>
      </html>
    `;

    // NOTE: You need to configure your email service here
    // Options:
    // 1. Use Resend API: https://resend.com
    // 2. Use SendGrid API: https://sendgrid.com
    // 3. Use your SMTP server
    
    // Example with Resend (recommended):
    /*
    const RESEND_API_KEY = Deno.env.get('RESEND_API_KEY');
    
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${RESEND_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        from: 'The Trade Learnify Academy <webinar@yourdomain.com>',
        to: email,
        subject: emailSubject,
        html: emailBody
      })
    });
    
    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    */

    // For now, return success (you need to implement actual email sending)
    return new Response(
      JSON.stringify({
        success: true,
        message: "Email would be sent here. Please configure your email service.",
        registration_id,
        email_content: {
          to: email,
          subject: emailSubject,
          preview: `Registration confirmed for ${name} in ${city}`
        }
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error in send-webinar-confirmation:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error.message || "Failed to process request",
      }),
      {
        status: 400,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});