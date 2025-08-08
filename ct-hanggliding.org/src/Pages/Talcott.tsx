import React from 'react'
import './Talcott.scss';
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from '../Components/Hero/Hero';
import Accordion from '../Components/UI/Accordion';
import MetaDecorator from '../Components/MetaDecorator';
import FlyingSites, { IFlyingSite } from '../Data/flying-sites';


const Talcott: React.FC = () => {

    const siteInfo = FlyingSites.filter((s) => s.id === "Talcott")

    const siteInfoDetails = (site: IFlyingSite, id: string) => {
        const info = site.placemarks.filter((p) => p.description === id)
        return info.length === 1 ? info[0].descriptionNode : <></>
    }

    return (
        <>
            <MetaDecorator title="Talcott Mountain Site Guide" description='Information about flying at Talcott Mountain.' />
            <Header />
            <Hero heroes={["hero_heublein-ideal-clouds", "hero_talcott-lz", "hero_talcott-flight-twilight", "hero_talcott-lz"]} heroText="Talcott" />

            <main id="talcott" className="content-container home surface-light-gradient">


                <div>
                    <div className="banner">
                        <h1 className="heading anim_scale-fade mb-1">Talcott Mountain Site Guide</h1>
                    </div>
                    <div className="text-normal">
                        <p><strong>Revised 7/31/2025</strong></p>

                        <Accordion title='General Description' active={true}>
                            <p>Talcott Mountain is a three-mile-long ridge running north to south in central Connecticut's Metacomet Range. Elevation is 950' MSL / 700' AGL at its highest point and offers beautiful views of rural Simsbury and Avon. Most of the mountain is a state park and has a number of hiking trails as well as the famous Hublein Tower on the south end of the ridge. The park attracts many hikers and site seers who are often curious about hang gliding and like to ask questions and watch us fly.</p>
                            <p>Talcott offers good ridge and thermal soaring. XC is difficult due to the proximity of Bradley Airport and the Windsor Locks Class C airspace.</p>
                        </Accordion>

                        <Accordion title='Required Credentials' active={true}>
                            <ul>
                                <li>A site orientation from a senior club member is required the first time you fly Talcott.</li>
                                <li>Current USHPA membership is required.</li>
                                <li>H3 rating is required. H2 pilots may fly with the approval and direct supervision of an observer.</li>
                                <li>CL &amp; AWCL endorsements are required, or under the supervision of an observer.</li>
                                <li><strong>Paragliding is strictly prohibited at Talcott due to the sheer cliff launch, and tree canopy directly over launch. Experienced paragliding pilots have evaluated the launch area and advised against launching paragliders at Talcott. Unauthorized attempts in the past have ended poorly.</strong></li>
                            </ul>
 

                        </Accordion>


                        <Accordion title='Location &amp; Access' active={true}>
                            <p>Talcott Mountain State Park is located along Rt 185 in Simsbury, CT. Meeting place is the original LZ located adjacent to the state police shooting range at 100 Nod Rd in Simsbury (coordinates: <a href="https://maps.app.goo.gl/sy5dSnJBZAx4SLQy8" target="_blank" rel="noreferrer">41.83762123782369, -72.8075181422494</a> ). Leave a few vehicles then carpool to the state park entrance on Summit Ridge Drive 2.3 miles away. Park in the grass on the side of the road. (Coordinates <a href="https://maps.app.goo.gl/5sMVZYEHoVezJ6fV6" target="_blank" rel="noreferrer">41.83933400305884, -72.7922315654148</a>).</p>
                            <p>Hike to launch is a &frac14; mile / 20-minute hike up the main hiking trail. The trail is often busy with hikers. Try not to clobber hikers with the ends of your glider. Be nice to the hikers &#8212; sometimes they offer to help carry your equipment. &#128522;</p>
                            <p>Winter access is possible but the gate at the park entrance will be closed. You have to park outside the gate which adds an additional &frac14; mile to the hike&hellip; in the snow.</p>

                        </Accordion>


                        <Accordion title='Launch' active={true}>
                            <div className="mt-1">
                                <div className='TalcottLaunchVR mt-2'></div>

                            </div>

                            {siteInfo.length === 1 ? siteInfoDetails(siteInfo[0], "Launch") : <></>}

                            <p>Launches can be safely executed in winds ranging from 0 to 15mph, and with a gust factor of 0 to 8mph. Launching outside of these parameters is not recommended.</p>
                            <p>Launch is a sheer cliff and is unforgiving of poor technique and less-than-perfect launch windows. Proficient cliff launching skills are essential and a wire crew is required for all but light conditions. Cross wind launches are not recommended. Be patient and wait for a good launch window.</p>
                            <p>Crowds often form to watch and ask questions. We encourage interaction with the public but do not allow yourself to be distracted from conducting safe preflight procedures. Spectators are required to stay back at the tree line during launches.</p>

                        </Accordion>

                        <Accordion title='LZ &#8212; Original' active={true} >
                            <ul>
                                <li>Located adjacent to the state police shooting range at 100 Nod Rd in Simsbury.</li>
                                <li>Coordinates: <a href="https://maps.app.goo.gl/TP7zetV1i8k7vWis8" target="_blank" rel="noreferrer">41.83762123782369, -72.8075181422494</a></li>
                                <li>Glide ratio from launch: 4.0</li>
                            </ul>
                            <p>The LZ is obstructed by tall trees on the west, south, and east sides, as well as by power lines on the south side. Higher performance gliders are difficult to maneuver into this somewhat restricted LZ. If the wind is calm or from the south, it's an easy approach from the north. If the wind is from any other direction, then Holcomb Field LZ is probably the better option.</p>

                            <p>We share this LZ with an RC airplane club. They are good about staying out of our way when they see gliders approaching, but be vigilant and try not to land on their runway. Also be careful of their pavilion and other structures along the west side of the field.</p>

                        </Accordion>

                        <Accordion title='LZ &#8212; Holcomb Field' active={true}>
                            <ul>
                                <li>Located on Nod Rd &frac12; mile north of the original LZ</li>
                                <li>Coordinates: <a href="https://maps.app.goo.gl/8PxKKH6M8brQYesZ8" target="_blank" rel="noreferrer">41.84187704857621, -72.80318127267603</a></li>
                                <li>Glide ratio from launch: 4.3</li>
                            </ul>

                            <p>Holcomb Field is aligned well with the prevailing winds of W and NW. The field is mostly soft and uneven dirt so be prepared to stick your landing. It can be difficult to run out a landing on this terrain and smaller wheels are ineffective.</p>

                            <p>Over half this field is used by a farmer to plant crops. Do not land, walk, or break down gliders anywhere near crops, or near areas that appear to be freshly plowed in preparation for planting. Our permission to use this field is delicate and we need to be respectful.</p>
                        </Accordion>


                        <Accordion title='Flight Hazards &amp; Restrictions' active={true}>

                            <p>The Talcott Mountain ridge has a narrow lift band which creates dense air traffic in non-thermal conditions if there are more than a few gliders in the sky. Be vigilant for other gliders. Familiarity with standard right of way rules is imperative.</p>
                            <p><strong>DO NOT LAND on the polo field (<a href="https://maps.app.goo.gl/cTtdqwxtgtZ3u1Me7" target="_blank" rel="noreferrer">41.83987975981228, -72.8069689945279</a>) to the north of the original LZ or on the semicircle-shaped field (<a href="https://maps.app.goo.gl/zbj3xVHg7s1RAE3t9" target="_blank" rel="noreferrer">41.839912041629375, -72.80363536160893</a>) to the south of Holcomb Field. Landing in both these areas is strictly prohibited. Do not land there under any circumstances unless there is a true emergency.</strong></p>
                            <p>Talcott is located 9 miles SW of Bradley International Airport and falls under the outer shelf of the Windsor Locks Class C airspace. The floor of the airspace is 2100' MSL (1200' above launch altitude). Hang glider flight into the Class C airspace is strictly prohibited. Be familiar with the parameters of the Class C airspace and do not exceed 2100' MSL unless you have flown out from underneath the Class C shelf. Be vigilant for low flying commercial aircraft.</p>
                            <p>Simsbury Airport is a small Class G airport 6 miles north of Talcott. Be vigilant for low flying small aircraft.</p>

                        </Accordion>



                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Talcott;