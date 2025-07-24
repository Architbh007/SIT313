require('dotenv').config(); // Loads environment variables

const express = require('express');
const path = require('path');
const sgMail = require('@sendgrid/mail');

const app = express();
const PORT = 3000; // Server port

sgMail.setApiKey(process.env.SENDGRID_API_KEY); // Set's SendGrid API key

app.use(express.static(path.join(__dirname, 'public'))); // Serve static files
app.use(express.urlencoded({ extended: true })); // Parse form data

// Show the subscription form
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Send welcome email when form is submitted
app.post('/sendmessage', (req, res) => {
  const userEmail = req.body.email;

  const welcomeEmail = {
    to: userEmail,
    from: 'bhullararchit07@gmail.com', 
    subject: 'Welcome to DEV@Deakin!',
    text: 'Thanks for subscribing to DEV@Deakin!',
    html: `<p>Hello! 👋<br/>Thanks for joining <strong>DEV@Deakin</strong>.</p>`,
  };

  sgMail
    .send(welcomeEmail)
    .then(() => {
      console.log('Email sent to:', userEmail);
      res.send('Welcome email sent!');
    })
    .catch((error) => {
      console.error('SendGrid Error:', error.response?.body || error.message || error);
      res.status(500).send('Email could not be sent.');
    });
});

// Start's the server
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
