import React, { useState, ChangeEvent } from 'react'

// type Props = {}

// export default function ContactForm({ }: Props) {

export default function ContactForm() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitMessageHandler = () => {
        // do something here to send an email
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
        console.log('submitted!');
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

    return (
        <form onSubmit={(e) => {
            e.preventDefault();
        }}>
            <label>First Name</label>
            <input value={firstName} onChange={firstNameChangedHandler} />
            <label>Last Name</label>
            <input value={lastName} onChange={lastNameChangedHandler} />
            <label>Email Address</label>
            <input value={email} onChange={emailChangedHandler} />
            <label>Message</label>
            <textarea value={message} onChange={messageChangedHandler} />
            <button type='submit' onClick={submitMessageHandler}>Submit</button>
        </form>
    )
}