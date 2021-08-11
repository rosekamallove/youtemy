const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const msg = {
  to: 'riteshkumarstudy@gmail.com',
  from: 'moriarity5555@gmail.com', 
  subject: 'Sending with Twilio SendGrid is Fun',
  text: 'Yo it works',
  html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};
sgMail
  .send(msg)
  .then(() => {}, error => {
    console.error(error);

    if (error.response) {
      console.error(error.response.body)
    }
  });