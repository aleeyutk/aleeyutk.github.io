const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

const handler = async (event) => {
  const { name, email, message } = JSON.parse(event.body);

  const mailOptions = {
    from: email,
    to: 'your-email@gmail.com',
    subject: `New message from ${name}`,
    text: message
  };

  try {
    await transporter.sendMail(mailOptions);
    return { statusCode: 200, body: 'Message sent' };
  } catch (error) {
    return { statusCode: 500, body: error.toString() };
  }
};