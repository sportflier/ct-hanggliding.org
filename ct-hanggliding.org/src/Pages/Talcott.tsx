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


                        <Accordion title='General Description' active={true}>
                            <p>Talcott Mountain is a three-mile-long ridge running north to south in central Connecticut’s Metacomet Range. Elevation is 950’ MSL / 700’ AGL at its highest point and offers beautiful views of rural Simsbury and Avon. Most of the mountain is a state park and has several hiking trails as well as the famous Heublein Tower on the south end of the ridge. The park attracts many hikers and site seers who are often curious about hang gliding and like to ask questions and watch us fly.</p>
                            <p>Talcott offers good ridge and thermal soaring. XC is difficult due to the proximity of Bradley Airport and the Windsor Locks Class C airspace.</p>
                        </Accordion>

                        <Accordion title='Required Credentials' active={true}>
                            <ul>
                                <li>A site orientation from a senior club member is required the first time you fly Talcott.</li>
                                <li>Current USHPA membership.</li>
                                <li>H3 rating. H2 pilots may fly with the approval and direct supervision of an observer.</li>
                                <li>CL &amp; AWCL endorsements, or the supervision of an observer.</li>
                            </ul>
                            <p><strong>Paragliding is strictly prohibited at Talcott due to the sheer cliff launch, and tree canopy directly over launch. Unauthorized attempts in the past have not ended well.</strong></p>

                        </Accordion>


                        <Accordion title='Location &amp; Access' active={true}>
                            <p>Talcott Mountain State Park is located along Rt 185 in Simsbury, CT. Meeting place is the original LZ located adjacent to the state police shooting range at 100 Nod Rd in Simsbury (coordinates: <a href="https://goo.gl/maps/6fXbz9tce6PgYSy49" target="_blank" rel="noreferrer">41.837621, -72.807518</a>). Leave a few vehicles then carpool to the state park entrance on Summit Ridge Drive 2.3 miles away. Park in the grass on the side of the road (coordinates: <a href="https://goo.gl/maps/o1btrVUMx2mxV1wj7" target="_blank" rel="noreferrer">41.839334, -72.792231</a>).</p>
                            <p>Hike to launch is a ¼ mile / 20-minute hike up the main hiking trail. The trail is often busy with hikers. Try not to clobber hikers with the ends of your glider. Be nice to the hikers – sometimes they offer to help carry your equipment.</p>
                            <p>Winter access is possible but the gate at the park entrance will be closed. You must park outside the gate which adds an additional ¼ mile to the hike… in the snow.</p>

                        </Accordion>


                        <Accordion title='Launch' active={true}>
                            <div className="mt-1">
                                <div className='TalcottLaunchVR mt-2'></div>

                            </div>

                            {siteInfo.length === 1 ? siteInfoDetails(siteInfo[0], "Launch") : <></>}

                            <p>Launch is a sheer cliff and is unforgiving of poor technique and less-than-perfect launch windows. Proficient cliff launching skills are essential and a wire crew is required for all but light conditions. The launch area protrudes out from the rest of the cliff so if there is any crosswind component at all, there will be rotor coming at you from the upwind side of your glider. Cross wind launches at Talcott are not recommended. Be patient and wait for a good launch window.
                            </p>
                            <p>
                                Crowds often form to watch and ask questions. We encourage interaction with the public but do not allow yourself to become distracted from conducting safe preflight procedures. Spectators are required to stay back at the tree line during launches.
                            </p>

                        </Accordion>


                        <Accordion title='Landing Zone' active={true}>

                            <ul>
                                <li>Located adjacent to the state police shooting range at 100 Nod Rd in Simsbury.</li>
                                <li>Coordinates: <a href="https://goo.gl/maps/6fXbz9tce6PgYSy49" target="_blank" rel="noreferrer">41.837621, -72.807518</a>.</li>
                                <li>Glide ratio from launch: 4.0</li>
                            </ul>

                            <p>The LZ is obstructed by tall trees on the west, south, and east sides, as well as by power lines on the south side. Higher performance gliders are difficult to maneuver into this somewhat restricted LZ. If the wind is calm or from the south, it’s an easy approach from the north.</p>
                            <p>We share this LZ with an RC airplane club. They are good about staying out of our way when they see gliders approaching but be vigilant and try not to land on their runway. Also be careful of their pavilion and other structures along the west side of the field.</p>

                        </Accordion>





                        {/* <Accordion title='LZ – Holcomb Field' active={true}>

                            <ul>
                                <li>Located on Nod Rd ½ mile north of the original LZ</li>
                                <li>Coordinates: <a href="https://goo.gl/maps/fczFDqFkwSyMFNfn9" target="_blank" rel="noreferrer">41.84187704857621, -72.80318127267603</a></li>
                                <li>Glide ratio from launch: 4.3</li>
                            </ul>

                            <p>Holcomb Field is aligned well with the prevailing winds of W and NW. The field is mostly soft and uneven dirt so be prepared to stick your landing. It can be difficult to run out a landing on this terrain and smaller wheels are ineffective.</p>
                            <p>
                                <strong>Over half this field is used by a farmer to plant crops. Do not land, walk, or break down gliders anywhere near crops, or near areas that appear to be freshly plowed in preparation for planting. Our permission to use this field is very delicate and we need to be respectful.</strong>
                            </p>

                        </Accordion> */}



                        <Accordion title='Airspace and Flight Restrictions' active={true}>

                            <p>Talcott is located 9 miles SW of Bradley International Airport and falls under the outer shelf of the Windsor Locks Class C airspace. The floor of the airspace is 2100’ MSL (1200’ above launch altitude). Hang glider flight into the Class C airspace is strictly prohibited. Be familiar with the parameters of the Class C airspace and do not exceed 2100’ MSL unless you have flown out from underneath the Class C shelf. Be vigilant for low flying commercial aircraft.</p>
                            <p>Simsbury Airport is a small Class G airport 6 miles north of Talcott. Be vigilant for low flying small aircraft.</p>
                            <p>
                                <strong>Landing on the polo field to the north of the original LZ is strictly prohibited. Do not land there under any circumstances unless there is a true emergency.</strong>
                            </p>

                        </Accordion>



                    </div>

                </div>


            </main>
            <Footer />
        </>
    )
}

export default Talcott;