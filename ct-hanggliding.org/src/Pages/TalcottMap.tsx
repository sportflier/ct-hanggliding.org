import React from 'react'
import './TalcottMap.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';
import FlyingSites from '../Data/flying-sites';
import MapCanvas from '../Components/Map/MapCanvas';
import HazardsImage from '../Assets/Images/Map/Talcott_LZ_Hazards.jpg';
import HolcombImage from '../Assets/Images/Map/Holcomb_LZ_Zone_Map-md.jpg';
import LaunchImage from '../Assets/Images/Map/Launch_Area_Zone_Map-md.jpg';

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

                <div className='mt-3'>
                      <h2>Launch Area</h2>
                    <img src={LaunchImage} alt="Launch Area" />
                    <h2>Talcott LZ Original Landing Hazards</h2>
                    <img src={HazardsImage} alt="Talcott Landing Zone Hazards" />

                    <h2>Holcomb LZ</h2>
                    <img src={HolcombImage} alt="Holcomb LZ" />



                </div>


            </main>
            <Footer />
        </>
    )
}

export default TalcottMap;
