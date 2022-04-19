import React from 'react'
import './TalcottMap.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';
import MetaDecorator from '../Components/MetaDecorator';

const TalcottMap: React.FC = () => {
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
                    <div className="text-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et voluptatibus quae, incidunt maiores temporibus, velit nisi iusto, dolorum voluptatum quidem doloribus reiciendis quia eius vitae rem? Delectus dolor quo doloremque.

                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default TalcottMap;
