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
            <Hero heroes={["hero_tanner-hiller-dragonfly", "hero_talcott-flight-twilight"]} heroText="Contact Us" />

            <div id="contact" className="content-container home surface-light-gradient">


                <div className="banner">
                    <h1 className="heading-2 anim_scale-fade">Contact Us</h1>


                </div>
                <div className='mt-1 text-normal'>

                    <p>
                        For questions and information about our club or about hang gliding in general, please use the form below.

                    </p>
                    <p>You are also welcome to contact Greg Saracino, our club president (SMS to 203-615-2075, or email to <a href='mailto:gregs61160@yahoo.com'>gregs61160@yahoo.com</a>.)</p>

                </div>

                <div className="form-wrap">
                    <ContactForm />

                </div>



            </div>
            <Footer />
        </>
    )
}

export default Contact;