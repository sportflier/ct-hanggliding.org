import React from "react";
import './Home.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Logo from './../Assets/Images/CHGA-logo.svg';
import LogoLight from './../Assets/Images/CHGA-logo-sky-light.svg';
import Hero from "../Components/Hero";

const Home: React.FC = () => {
    return (
        <>
            <Header />
            <Hero className="hero_chga-4th" heroText="CHGA" />
            <div id="home" className="content-container home surface-light-gradient">

                <div className="chga-mission">
                    <div>
                        <picture>
                            <source srcSet={LogoLight} media="(prefers-color-scheme: dark)" />
                            <img src={Logo} alt='Connecticut Hang Gliding Association' className="chga-logo" />
                        </picture>


                    </div>
                    <div>
                        <div className="banner">
                            <h1 className="heading-2 anim_scale-fade">Our Mission</h1>
                        </div>
                        <p className="text-normal">
                            Established in 1974, the <strong>Connecticut Hang Gliding Association</strong> is an organization of men and women committed to the pursuit, promotion, and protection of hang gliding in New England.

                        </p>

                    </div>
                </div>

            </div>
            <Footer />
        </>
    )
};

export default Home;
