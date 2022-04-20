import React, { useState } from 'react';
import {
    MapContainer, TileLayer, Popup, useMap, useMapEvent,
    FeatureGroup,
    LayersControl,
    Polygon,
} from 'react-leaflet';

// import {  earthPosition, geoPosition, pointOfInterest } from "./GlideFunctions";
import { IFlyingSite } from './../../Data/flying-sites';
import ApiConnects from './../../Data/api-connect';

interface IFlyingSiteMap {
    site: IFlyingSite,
}

const FlyingSiteMap = (props: IFlyingSiteMap) => {
    const map_zoom = 15;
    const [mapCenter, setMapCenter] = useState(props.site.mapCenter);

    const connect = ApiConnects.filter((a) => a.id === "MapTiler")
    const apiKey = connect?.length === 1 ? connect[0].key : ""

    return (<>
        <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={map_zoom}>
            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${apiKey}`}
            />
            <LayersControl position="bottomright">
                {/* <LayersControl.Overlay name="Glide Range" checked>
                    <FeatureGroup pathOptions={{ color: 'purple' }}>
                        <Popup>Approximated glide range</Popup>
                    </FeatureGroup>
                </LayersControl.Overlay> */}
            </LayersControl>

        </MapContainer>



    </>

    )
}

export default FlyingSiteMap;
