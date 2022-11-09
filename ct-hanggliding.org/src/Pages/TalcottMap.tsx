import React from 'react'
import './TalcottMap.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';
import FlyingSites from '../Data/flying-sites';
import MapCanvas from '../Components/Map/MapCanvas';

const TalcottMap: React.FC = () => {

    const data = FlyingSites.filter(site => site.id === "Talcott")

    return (
        <>
            <MetaDecorator title="Talcott Mountain Site Map" description='Talcott Mountain flying orientation map.' />
            <Header />
            <Hero heroes={["hero_heublein-ideal-clouds", "hero_talcott-lz", "hero_talcott-flight-twilight", "hero_talcott-lz"]} heroText="Talcott" />

            <main id="talcott-map" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading anim_scale-fade mb-1">Talcott Mountain Site Map</h1>
                    </div>

                    {data?.length === 1 ? <MapCanvas site={data[0]} /> : <div>Site data error!</div>}

                </div>


            </main>
            <Footer />
        </>
    )
}

export default TalcottMap;
