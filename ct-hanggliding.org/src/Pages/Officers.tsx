import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import OfficerCard from '../Components/OfficerCard';
import Greg from '../Assets/Images/Officers/Greg_Saracino.jpg';
import Carol from '../Assets/Images/Officers/Carol.jpeg';
import Lisa from '../Assets/Images/Officers/Lisa_Kozar.jpg';
import Woz from '../Assets/Images/Officers/Woz.jpg';

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
                        <OfficerCard portrait={Greg} >
                            <strong>President &amp; Safety Coordinator</strong><br />Greg Saracino<br />gregs61160(at)yahoo.com
                        </OfficerCard>
                        <OfficerCard portrait={Woz} className="officer-card_reverse" >
                            <strong>Vice President</strong><br />Steve Wozniki<br />mrwoz(at)sbcglobal.net
                        </OfficerCard>
                        <OfficerCard portrait={Carol}>
                            <strong>Treasurer</strong><br />Carol Allard<br />carol.allard(at)yahoo.com
                        </OfficerCard>
                        <OfficerCard portrait={Lisa} className="officer-card_reverse" >
                            <strong>Secretary</strong><br />Lisa Silvestri Kozar<br />SecondRodeo21(at)yahoo.com
                        </OfficerCard>

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Officers;