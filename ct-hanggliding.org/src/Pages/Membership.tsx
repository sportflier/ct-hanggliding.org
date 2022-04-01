import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';


const Membership: React.FC = () => {
    return (
        <>
            <Header />
            <Hero className="hero_falcon-launch" heroText="Join" />

            <div id="membership" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Join the CHGA</h1>
                    </div>
                    <div className="text-normal">
                        <p>The <abbr title="Connecticut Hang Gliding Association">CHGA</abbr> was created in 1974 when the sport of hang gliding was new and wild. Since then we have grown and matured, along with the sport. Today we are Chapter 11 of the United States Hang Gliding Association. We currently have about 15 members.</p>


                        <h2>How To Join the CHGA</h2>
                        <p>Send your name, address, USHGPA number, HG or PG rating, email address and $50 annual membersip fee to our treasurer, <a href="https://www.paypal.me/carolcomrie">Carol Comrie via PayPal</a>.</p>

                        <p>If interested please also join our group forum at <a href='https://groups.io/g/HangGlideConnecticut'>HangGlideConnecticut.groups.io</a>, or chat with us on our Discord server <a href="https://discord.gg/MVzXN237FS">Northeast Hang Gliders</a>.</p>

                        <p>Please see the <a href="/calendar">calendar</a> for club meeting schedule and other events. Members will receive monthly meeting notices by email.</p>

                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Membership;