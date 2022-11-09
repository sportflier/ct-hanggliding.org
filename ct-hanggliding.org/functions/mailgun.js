require('dotenv').config()
const formData = require('form-data');
const Mailgun = require('mailgun.js');
const mailgun = new Mailgun(formData);
const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY || 'key-yourkeyhere'});


exports.handler = async (event,context) => {
    const {firstName} = event.queryStringParameters
    const {lastName} = event.queryStringParameters
    const {email} = event.queryStringParameters
    const {message} = event.queryStringParameters


    const subject = `CHGA contact form message from ${firstName} ${lastName}`

    console.log('sending email...')
    let outcomeCode = 200, outcomeMessage = 'Placing message in queue...'
    try {


        const bodyText = `Hello!\n
        \n
        Someone has submitted the following message from the CHGA website:\n
        \n
        First name: ${firstName}\n
        \n
        Last name: ${lastName}\n
        \n
        Email: ${email}\n
        \n
        ${message}\n
        \n
        Best wishes,\n
        \n
        The CHGA website`

const bodyHtml = `<p>Hello!</p>
<p>Someone has submitted the following message from the CHGA website:</p>
<p><strong>First name:</strong> ${firstName}</p>
<p><strong>Last name:</strong> ${lastName}</p>
<p><strong>Email:</strong> ${email}</p>
<p style="padding: 12px; border-left: 4px solid #d0d0d0; font-style: italic;">${message}</p>
<p>&nbsp;</p>
<p>Best wishes,</p>
<p><br>The CHGA website</p>`



        await mg.messages.create('sandbox32ff356d83194959811158af24e9cbfa.mailgun.org', {
            from: "CHGA Emailer <postmaster@sandbox32ff356d83194959811158af24e9cbfa.mailgun.org>",
            to: ["GregS61160@yahoo.com"],
            subject: subject,
            text: bodyText,
            html: bodyHtml
          })
          .then(msg => {
            console.log(msg)
            outcomeCode = 200
            outcomeMessage = 'Your message has been queued. Thank you!'

          } ) // logs response data
          .catch(err => {
            console.error(err)
            outcomeCode = 200
            outcomeMessage = 'Unfortunately, an error occurred and your message has not been sent. Please try again later, or contact one of the board members directly from the Officers page.'
          } ); // logs any error

        
    } catch (error) {
        console.log('SEND FAILED...', error);
        outcomeCode = 500
        outcomeMessage = 'Unfortunately, an error occurred and your message has not been sent. Please try again later, or contact one of the board members directly from the Officers page.'

    
    }

    return {
        statusCode:outcomeCode,
        body:outcomeMessage,
    }



}