const mailgun = require('mailgun-js');

const mg = mailgun({
  apiKey: 'bf6e607b12cfcfc62cd67a8da1f375e1-97129d72-45942057',
  domain: 'https://api.eu.mailgun.net/'
});

function sendEmail({ name, email, message }, callback) {
  const data = {
    from: `${name} <${email}>`,
    to: 'gfulco4@gmail.com', // Your receiving email
  };

  mg.messages().send(data, function (error, body) {
    callback(error, body);
  });
}

module.exports = sendEmail;

