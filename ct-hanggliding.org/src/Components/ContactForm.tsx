import React, { useState, ChangeEvent, useEffect } from 'react'
import emailjs, { init } from '@emailjs/browser'
import './ContactForm.scss'

init("OiSIcGBF7wKl6TGur")

// type Props = {}

// export default function ContactForm({ }: Props) {

export default function ContactForm() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [message, setMessage] = useState('')
    const [sendResult, setSendResult] = useState('')

    const [formIsValid, setFormIsValid] = useState(false);


    useEffect(() => {
        const identifier = setTimeout(() => {
            // console.log("Checking form validity!");
            setFormIsValid(
                email.includes("@") && firstName.trim().length > 0 && lastName.trim().length > 0 && message.trim().length > 0
            );
        }, 500);

        // Our cleanup function:
        return () => {
            // console.log("CLEANUP");
            clearTimeout(identifier);
        };
    }, [email, firstName, lastName, message]);


    const submitMessageHandler = () => {

        const templateParams = {
            from_first_name: firstName,
            from_last_name: lastName,
            from_email: email,
            reply_to: email,
            message: message
        }
        const serviceId = 'service_hw6xm2o'; // ct.hang.gliding@gmail.com
        const templateId = 'template_ob0hcvq'; // CHGA contact form

        emailjs.send(serviceId, templateId, templateParams)
            .then((response) => {
                // console.log('SUCCESS!', response.status, response.text);
                setSendResult('Your message has been sent. Thank you!');
            }, (error) => {
                console.log('FAILED...', error);
                setSendResult('Unfortunately, an error occurred and your message has not been sent. Please try again later, or contact one of the board members directly from the Officers page.')
            });



        // setFirstName('');
        // setLastName('');
        // setEmail('');
        // setMessage('');
        // console.log('submitted!');
    }

    const firstNameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setFirstName(e.target.value);
    }

    const lastNameChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setLastName(e.target.value);
    }
    const emailChangedHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value);
    }
    const messageChangedHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }


    if (sendResult.length === 0) {
        return (

            <div className="contact-form">
                <form onSubmit={(e) => {
                    e.preventDefault();
                }}>
                    <div className="input-group">
                        <label htmlFor='firstname'>First Name</label>
                        <input id='firstname' value={firstName} onChange={firstNameChangedHandler} type="text" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor='lastname'>Last Name</label>
                        <input id='lastname' value={lastName} onChange={lastNameChangedHandler} type="text" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email Address</label>
                        <input id='email' value={email} onChange={emailChangedHandler} type="email" />

                    </div>
                    <div className="input-group">
                        <label htmlFor='message'>Message</label>
                        <textarea id='message' value={message} onChange={messageChangedHandler} required cols={25} rows={5} />

                    </div>
                    <div className="submit-group">
                        <button type='submit' onClick={submitMessageHandler} disabled={!formIsValid}>Submit</button>

                    </div>
                </form>
            </div>
        )
    }
    else {
        return (
            <p><strong>{sendResult}</strong></p>
        )
    }

}