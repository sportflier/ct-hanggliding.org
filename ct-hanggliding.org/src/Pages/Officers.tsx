import React from 'react'
import './Officers.scss'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import FormattedOfficerCard from '../Components/OfficerCard';
import Greg from '../Assets/Images/Officers/Greg_Saracino.jpg';
import Carol from '../Assets/Images/Officers/Carol.jpeg';
import Lisa from '../Assets/Images/Officers/Lisa_Kozar.jpg';
import Woz from '../Assets/Images/Officers/Woz.jpg';
import MetaDecorator from '../Components/MetaDecorator';


const Officers: React.FC = () => {
    return (
        <>
            <MetaDecorator title="CHGA Club Officers" description='Information about the CHGA club officers.' />
            <Header />
            <Hero heroes={["hero_talcott-flyby", "hero_talcott-flight-twilight"]} heroText="Officers" />

            <main id="officers" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">CHGA Club Officers</h1>
                    </div>
                    <div className="officers-wrap">
                        <FormattedOfficerCard portrait={Greg} title='President &amp; Safety Officer ' name='Greg Saracino' email='gregs61160@yahoo.com' phone='203-615-2075' />
                        <FormattedOfficerCard portrait={Woz} className="officer-card_reverse" name='Steve Woznicki' title='Vice President' email='mrwoz@sbcglobal.net' />
                        <FormattedOfficerCard portrait={Carol} name='Carol Allard' title='Treasurer' email='carol.allard@yahoo.com' />
                        <FormattedOfficerCard portrait={Lisa} className="officer-card_reverse" name='Lisa Silvestri Kozar' title='Secretary' email='SecondRodeo21@yahoo.com' />

                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Officers;