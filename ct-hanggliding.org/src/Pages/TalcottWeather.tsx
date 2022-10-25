import React from 'react'
import './TalcottWeather.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';

const TalcottWeather: React.FC = () => {

    return (
        <>
            <MetaDecorator title="Talcott Mountain Weather" description='Talcott Mountain current and forecasted weather conditions.' />
            <Header />
            <Hero heroes={["hero_heublein-ideal-clouds", "hero_talcott-lz", "hero_talcott-flight-twilight", "hero_talcott-lz"]} heroText="Weather" />

            <main id="talcott-weather" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading anim_scale-fade mb-1">Talcott Mountain Weather Forecast</h1>
                    </div>


                </div>


            </main>
            <Footer />
        </>
    )
}

export default TalcottWeather;
