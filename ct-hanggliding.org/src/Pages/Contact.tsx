import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import './Contact.scss';
import ContactForm from '../Components/ContactForm';
import MetaDecorator from '../Components/MetaDecorator';
import ReactGA from 'react-ga4'

const Contact: React.FC = () => {

    ReactGA.send({ hitType: "pageview", page: "/contact" });


    return (
        <>
            <MetaDecorator title="Contact Us" description='For questions and information about our club or about hang gliding in general, please use the form on this page.' />
            <Header />
            <Hero heroes={["hero_tanner-hiller-dragonfly", "hero_talcott-flight-twilight", "hero_dragonfly-glider"]} heroText="Contact Us" />

            <main id="contact" className="content-container home surface-light-gradient">


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



            </main>
            <Footer />
        </>
    )
}

export default Contact;