const express = require('express');
const bodyParser = require('body-parser');
const sendEmail = require('./send-email');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.post('./send-email', (req, res) => {
  const { name, email } = req.body;

  sendEmail({ name, email }, (error, body) => {
    if (error) {
      console.error('Mailgun Error:', error);
      res.status(500).send('Failed to send email.');
    } else {
      console.log('Email sent:', body);
      res.send('Email sent successfully!');
    }
  });
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
