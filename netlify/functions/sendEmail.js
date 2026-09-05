const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method Not Allowed' })
    };
  }

  let body;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Invalid JSON payload' })
    };
  }

  const { name, email, message } = body;

  if (!name || !email || !message) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Please provide name, email, and message.' })
    };
  }

  const mailOptions = {
    from: process.env.GMAIL_USER,
    replyTo: email,
    to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER || 'your-email@gmail.com',
    subject: `Portfolio Contact: New message from ${name}`,
    text: `Sender: ${name} (${email})\n\nMessage:\n${message}`
  };

  try {
    await transporter.sendMail(mailOptions);
    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: 'Message sent successfully!' })
    };
  } catch (error) {
    return {
      statusCode: 500,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ error: error.message || 'Failed to send message.' })
    };
  }
};

exports.handler = handler;