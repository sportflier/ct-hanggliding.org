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
            <Hero heroText="CHGA" videoId="Uj7dBEKF-rg" />
            <main id="home" className="content-container home surface-light-gradient">

                <div className="chga-mission">
                    <div>
                        <picture>
                            <source srcSet={LogoLight} media="(prefers-color-scheme: dark)" />
                            <img src={Logo} alt='Connecticut Hang Gliding Association' className="chga-logo" />
                        </picture>


                    </div>
                    <div>
                        {/* <p>Player:</p>
                        <YoutubePlayer videoId="FsyoOucwprI" className="my-video-player" /> */}
                        <div className="banner">
                            <h1 className="heading-2 anim_scale-fade">Our Mission</h1>
                        </div>
                        <p className="text-normal">
                            Established in 1974, the <strong>Connecticut Hang Gliding Association</strong> is an organization of men and women committed to the pursuit, promotion, and protection of hang gliding in New England.

                        </p>

                        <p className="text-normal">
                            Humanity's oldest dream is to fly like a bird, and hang gliding is the closest human beings can ever get to experiencing it. There is no motor, no noise, and no complicated machinery. Just you, the simplest of equipment, and some skills will have you soaring with hawks and eagles. Contrary to common belief, hang gliders do not jump off cliffs and glide down to the bottom. We use rising air to climb thousands of feet into the sky and stay aloft, often for hours at a time. It's beautiful. It's peaceful. It's exhilarating. There really is nothing like it! And it’s safer than you think!
                        </p>
                        <p className="text-normal">
                            If you love the outdoors and have a sense of adventure, you will LOVE hang gliding! If you want to learn how to fly, contact us and we will show you how. If you have questions and want to learn more, contact us and we will be happy to answer your questions. We are passionate about flying and we want to share this amazing experience with others!
                        </p>
                    </div>
                </div>

            </main>
            <Footer />
        </>
    )
};

export default Home;
