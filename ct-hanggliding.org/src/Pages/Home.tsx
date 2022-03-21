import React from "react";
import './Home.scss';
import Footer from "../Components/Footer";
import Logo from './../Assets/Images/CHGA-logo.svg';


const Home: React.FC = () => {
    return (
        <>
            <div className="hero hero_chga-4th">
                <div className="hero-text-wrap anim_slide-in-fade">
                    <h1 className="hero-text">CHGA</h1>
                </div>
            </div>
            <div className="content-container home surface-light-gradient">

                <div className="chga-mission">
                    <div>
                        <img src={Logo} alt='Connecticut Hang Gliding Association' className="chga-logo" />
                    </div>
                    <div>
                        <div className="banner">
                            <h2 className="heading-2 anim_scale-fade">Our Mission</h2>
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
