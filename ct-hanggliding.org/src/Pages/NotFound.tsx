import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';


export default function NotFound() {
    return (
        <>
            <MetaDecorator title="Not Found!" description='The requested resource could not be found.' />
            <Header />
            <Hero heroes={["hero_birds-flock-india", "hero_raptor"]} heroText="Not Found!" />

            <main id="notfound" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading anim_scale-fade mb-1">Whoops! Not Found</h1>
                    </div>
                    <div className="text-normal">

                        <p>The item you were looking for could not be found.</p>




                    </div>

                </div>


            </main>
            <Footer />

        </>
    )
}