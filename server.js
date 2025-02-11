const sgMail = require('@sendgrid/mail');
require('dotenv').config();

sgMail.setApiKey(process.env.GRIDAPI);

const msg = {
  to: ['szsz0043@gmail.com', 'shafeeqmohamed111@gmail.com'],
  from: process.env.SENDER, // Must be a verified sender in SendGrid
  subject: 'SendGrid Email Testing',
  text: 'Hello! This email has SendGrid Email Testing.', // Fallback text
  html: `
    <div style="background: url('https://source.unsplash.com/1600x900/?abstract,technology') no-repeat center center; background-size: cover; padding: 40px 20px; text-align: center; color: white; font-family: Arial, sans-serif;">
      <div style="background: rgba(0, 0, 0, 0.7); padding: 30px; border-radius: 10px;">
        <h1 style="margin: 0; font-size: 24px;">📩 SendGrid Email Testing</h1>
        <p style="font-size: 16px; margin: 20px 0;">Hello! This email has SendGrid Email Testing.</p>
        <a href="https://www.google.com" style="display: inline-block; padding: 10px 20px; background: #ff9800; color: white; text-decoration: none; font-size: 16px; border-radius: 5px;">Click Here</a>
      </div>
    </div>
  `,
};

sgMail.send(msg)
  .then(() => console.log('✅ Email sent with tracking & custom background!'))
  .catch(error => console.error('❌ Error:', error.response ? error.response.body : error));
