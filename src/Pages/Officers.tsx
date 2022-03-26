import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import OfficerCard from '../Components/OfficerCard';
import Greg from '../Assets/Images/Officers/Greg_Saracino.jpg';
import Carol from '../Assets/Images/Officers/Carol.jpeg';
import Lisa from '../Assets/Images/Officers/Lisa_Kozar.jpg';
import Woz from '../Assets/Images/Officers/Woz.jpg';

interface IOfficerCard {
    portrait: string,
    title: string,
    name: string,
    phone?: string,
    email?: string,
    className?: string,
}

const FormattedOfficerCard: React.FC<IOfficerCard> = ({ portrait, title, name, phone = '', email = '', className = '' }: IOfficerCard) => {
    return (
        <OfficerCard portrait={portrait} className={className} >
            <strong>{title}</strong><br />{name}
            {phone.length > 0 ? <><br />{phone}</> : <></>}
            {email.length > 0 ? <><br /><a href={`mailto:${email}`}>{email}</a></> : <></>}
        </OfficerCard>

    )
}

const Officers: React.FC = () => {
    return (
        <>
            <Header />
            <Hero className="hero_talcott-setup-area" heroText="Officers" />

            <div id="membership" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">CHGA Club Officers</h1>
                    </div>
                    <div className="d-flex fl-col fl-center">
                        <FormattedOfficerCard portrait={Greg} title='President &amp; Safety Officer ' name='Greg Saracino' email='gregs61160@yahoo.com' phone='203-615-2075' />
                        <FormattedOfficerCard portrait={Woz} className="officer-card_reverse" name='Steve Woznicki' title='Vice President' />
                        <FormattedOfficerCard portrait={Carol} name='Carol Allard' title='Treasurer' />
                        <FormattedOfficerCard portrait={Lisa} className="officer-card_reverse" name='Lisa Silvestri Kozar' title='Secretary' />

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Officers;