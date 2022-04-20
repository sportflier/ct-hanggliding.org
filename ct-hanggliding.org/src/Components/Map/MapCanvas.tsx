import React, { useState } from "react";
import { position } from "./GlideFunctions";
import FlyingSiteMap from "./FlyingSiteMap";

import './MapCanvas.scss';
import { IFlyingSite } from './../../Data/flying-sites';

const MapTilerLogo = () => {
    return (
        <a href="https://www.maptiler.com/" target={"_blank"} rel="noreferrer" className="maptiler-logo">
            <img src="https://www.maptiler.com/styles/style/logo/maptiler-logo-adaptive.svg#maptilerLogo" alt="" />

        </a>
    )
}

interface IMapCanvasProps {
    site: IFlyingSite
}



const MapCanvas = (props: IMapCanvasProps) => {
    return (
        <div className="map_canvas">
            <MapTilerLogo />

            <div id="map">
                <FlyingSiteMap site={props.site} />
            </div>
        </div>
    )
}

export default MapCanvas;

// todo: get elevation data... flag when glide path is getting close to terrain
// https://opendata.stackexchange.com/questions/195/is-there-an-open-api-for-world-terrain-data#:~:text=The%20Google%20Elevation%20API%20should%20allow%20you%20to,on%20the%20ocean%20floor%20%28which%20return%20negative%20values%29.

// https://open-elevation.com/

// https://developers.airmap.com/docs/elevation-api
// https://dashboard.airmap.com/
