import React, { useState, ChangeEvent, useEffect } from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import './Contact.scss';

const Contact: React.FC = () => {

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
        <>
            <Header />
            <Hero className="hero_birds-flock-india" heroText="Contact Us" />

            <div id="contact" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Contact Us</h1>


                    </div>
                    <div>
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


                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Contact;