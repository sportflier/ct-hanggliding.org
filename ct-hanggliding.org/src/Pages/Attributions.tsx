import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';

const Attributions: React.FC = () => {

    return (
        <>
            <MetaDecorator title="Attributions" description='Information about assets used on this website.' />
            <Header />
            <Hero heroes={["hero_raptor", "hero_birds-flock-india", "hero_talcott-flight-twilight"]} heroText="Attributions" />

            <main id="attributions" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Attributions</h1>
                    </div>
                    <div className="text-normal">
                        <ul>
                            <li>The <strong>WhatsApp icon</strong> which appears on this site is licensed under Creative Commons from Rebin Infotech (<a href='https://www.rebininfotech.com/'>https://www.rebininfotech.com/</a>).</li>
                        </ul>


                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Attributions;