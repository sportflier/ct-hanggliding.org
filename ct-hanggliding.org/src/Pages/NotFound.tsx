import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';


export default function NotFound() {
    return (
        <>
            <Header />
            <Hero className="hero_heublein-ideal-clouds" heroText="Not Found!" />

            <div id="notfound" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading anim_scale-fade mb-1">Whoops! Not Found</h1>
                    </div>
                    <div className="text-normal">

                        <p>The item you were looking for could not be found.</p>




                    </div>

                </div>


            </div>
            <Footer />

        </>
    )
}