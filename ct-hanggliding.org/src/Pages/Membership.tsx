import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';
import ReactGA from 'react-ga4'


const Membership: React.FC = () => {
    ReactGA.send({ hitType: "pageview", page: "/join" });

    return (
        <>
            <MetaDecorator title="Join the CHGA" description='Information about how to become a CHGA member.' />
            <Header />
            <Hero heroes={["hero_falcon-launch", "hero_greylock-flyover", "hero_talcott-flight-twilight"]} heroText="Join" />

            <main id="membership" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Join the CHGA</h1>
                    </div>
                    <div className="text-normal">
                        <p>The <abbr title="Connecticut Hang Gliding Association">CHGA</abbr> is a group of about 20 really nice men and women who are passionate about flying, and equally as passionate about sharing it. If you want to join us, please send your name, email address, phone number, your USHPA number if you have one, and our $50 annual membership fee to our treasurer, <a href="https://www.paypal.me/carolcomrie">Carol Comrie via PayPal</a>. You can also send a check via snail mail to our president:</p>

                        <p>Greg Saracino<br />321 Pheasant Glen<br />Shelton, CT 06484</p>

                        <p>Make check payable to Greg Saracino or Carol Allard with “CHGA” in memo.</p>


                        <p>You can join our email list by setting up a free account at <a href='https://groups.io/g/HangGlideConnecticut'>https://groups.io/g/HangGlideConnecticut</a>.</p>


                        <p>… or chat with us on our Discord server,  <a href="https://discord.gg/MVzXN237FS">Northeast Hang Glider Pilots</a>.</p>

                        <p>See the <a href="/calendar">calendar</a> for our club meeting schedule and other events. Day-to-day flying activities are unpredictable and are usually planned via our Discord Server, and do not appear on the calendar.</p>

                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Membership;