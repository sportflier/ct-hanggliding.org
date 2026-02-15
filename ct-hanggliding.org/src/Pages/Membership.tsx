import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import MetaDecorator from '../Components/MetaDecorator';

const Membership: React.FC = () => {

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
                        <p>The <abbr title="Connecticut Hang Gliding Association">CHGA</abbr> is a group of about 20 really nice men and women who are passionate about flying, and equally as passionate about sharing it. If you want to join us, please send your name, email address, phone number, your USHPA number if you have one, and our $50 annual membership fee <a href="https://www.paypal.com/ncp/payment/LXLGU9QB8XQKY" target='_blank' rel='noreferrer'>via PayPal</a>. You can also send a check via snail mail to our treasurer:</p>

                        <p>Steve Woznicki<br />67 Simsbury Manor Dr.<br />Weatogue, CT 06089</p>

                        <p>Make check payable to "CHGA, Inc.".</p>


                        <p>You can join our email list by setting up a free account at <a href='https://groups.io/g/HangGlideConnecticut'>https://groups.io/g/HangGlideConnecticut</a>.</p>


                        <p>… or chat with us on our WhatsApp channel,  <a href="https://chat.whatsapp.com/CNI43dAUEaw0aW4aMTDGFQ">Talcott</a>.</p>

                        <p>See the <a href="/calendar">calendar</a> for our club meeting schedule and other events. Day-to-day flying activities are unpredictable and are usually planned via our WhatsApp channel, and do not appear on the calendar.</p>

                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Membership;