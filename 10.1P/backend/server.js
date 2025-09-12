require('dotenv').config(); // Loads environment variables

const express = require('express');
const cors = require('cors');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = 5000; // Backend port

app.use(cors()); // Allow requests from React frontend
app.use(express.json()); // Parse JSON body

// Configure's SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

// API route: Send welcome email
app.post('/sendmessage', async (req, res) => {
  const userEmail = req.body.email;

  const welcomeEmail = {
    to: userEmail,
    from: 'bhullararchit07@gmail.com',
    subject: 'Welcome to DEV@Deakin!',
    text: 'Thanks for subscribing to DEV@Deakin!',
    html: `<p>Hello! 👋<br/>Thanks for joining <strong>DEV@Deakin</strong>.</p>`,
  };

  try {
    await sgMail.send(welcomeEmail);
    console.log('Email sent to:', userEmail);
    res.status(200).json({ message: 'Welcome email sent!' });
  } catch (error) {
    console.error('SendGrid Error:', error.response?.body || error.message || error);
    res.status(500).json({ error: 'Email could not be sent.' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});
