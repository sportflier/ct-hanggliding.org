import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import ChgaGCal from '../Components/Calendar/ChgaGCal';
import MetaDecorator from '../Components/MetaDecorator';
import ReactGA from 'react-ga4'

const Calendar: React.FC = () => {
    ReactGA.send({ hitType: "pageview", page: "/calendar" });
    return (
        <>
            <MetaDecorator title="Calendar" description='Information about planned CHGA events.' />
            <Header />
            <Hero heroes={["hero_talcott-lz", "hero_chga-4th", "hero_heublein-ideal-clouds"]} heroText="Calendar" />

            <main id="calendar" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Calendar</h1>
                    </div>
                    <div className="text-normal">

                        <p>Club meetings are held on the first Tuesday of every month. Dinner at 7pm, meeting at 8pm. Location depends on the weather…</p>
                        <p>Good weather: <a href="https://www.google.com/maps/@41.836627,-72.8096467,17z">Talcott Mountain LZ</a>. GPS to the state police shooting range at 100 Nod Rd, Simsbury, CT. Look for the large field adjacent to the shooting range. Bring a chair to sit around the fire, and bring some food to throw on the grill.</p>
                        <p>Bad weather: <a href="https://goo.gl/maps/J9D51oK152iWCF837">George’s Pizza, 9 School St, Unionville, CT</a>.</p>
                        <p>Meetings are also occasionally held at members’ homes.</p>
                        <p>Meeting location and other meeting information will be posted on the calendar, emailed out to our email group, and posted on <a href='https://discord.gg/MVzXN237FS'>our Discord server</a> within a few days of the meeting.</p>




                    </div>

                </div>

                <ChgaGCal />

            </main>
            <Footer />
        </>
    )
}

export default Calendar;