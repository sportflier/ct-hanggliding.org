import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import './Contact.scss';
import ContactForm from '../Components/ContactForm';

const Contact: React.FC = () => {



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
                        {/* <ContactForm /> */}
                        Coming soon!
                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Contact;