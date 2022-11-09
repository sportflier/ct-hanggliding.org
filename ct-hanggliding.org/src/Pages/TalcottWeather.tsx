import React from 'react'
import './TalcottWeather.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';
import Forecast from '../Components/Weather/Forecast';
import ReactGA from 'react-ga4'

const TalcottWeather: React.FC = () => {

    ReactGA.send({ hitType: "pageview", page: "/weather" });

    return (
        <>
            <MetaDecorator title="Talcott Mountain Weather" description='Talcott Mountain current and forecasted weather conditions.' />
            <Header />
            <Hero heroes={["hero_heublein-ideal-clouds", "hero_talcott-lz", "hero_talcott-flight-twilight", "hero_talcott-lz"]} heroText="Weather" />

            <main id="talcott-weather" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading anim_scale-fade mb-1">NWS Weather Forecast - Weatogue, Simsbury, CT</h1>
                    </div>
                    <Forecast></Forecast>

                    <div className='text-normal text-normal-reference'>Days that are outlined have a wind direction which may be favorable for launching at Talcott. Please see the site guide for recommended ranges for velocity and gusts.</div>
                </div>


            </main>
            <Footer />
        </>
    )
}

export default TalcottWeather;
