import React from 'react'
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero';

const Calendar: React.FC = () => {
    return (
        <>
            <Header />
            <Hero className="hero_talcott-lz" heroText="Calendar" />

            <div id="calendar" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading-2 anim_scale-fade">Calendar</h1>
                    </div>
                    <div className="text-normal">
                        <p>Meetings are held on the first Tuesday of the month at George's Pizza restaurant at 9 School Street, Unionville, Connecticut at 8 PM. Come at 7 PM to eat dinner.</p>

                        <p>Find more information about how to <a href='/join'>join us</a>.</p>
                    </div>

                </div>


            </div>
            <Footer />
        </>
    )
}

export default Calendar;