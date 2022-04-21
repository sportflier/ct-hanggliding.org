import React, { useState } from 'react';
import {
    MapContainer, TileLayer, Popup, useMap, useMapEvent,
    FeatureGroup,
    LayersControl,
    Polygon,
    Marker,
} from 'react-leaflet';

// import {  earthPosition, geoPosition, pointOfInterest } from "./GlideFunctions";
import { IFlyingSite, IDetailedPlacemark } from './../../Data/flying-sites';
import GetApiKey from './../../Data/api-connect';

interface IFlyingSiteMap {
    site: IFlyingSite,
}

const mapMarker = (placemark: IDetailedPlacemark) => {
    return (
        <Marker position={placemark}>
            {placemark.description.length > 0 ?
                <Popup minWidth={90}>
                    <p><strong>{placemark.description}</strong></p>
                    {placemark.descriptionNode}
                </Popup>

                : <></>}
        </Marker>
    )
}


const FlyingSiteMap = (props: IFlyingSiteMap) => {
    const map_zoom = 15;
    const [mapCenter] = useState(props.site.mapCenter);

    const apiKey = GetApiKey("MapTiler")

    return (<>
        <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={map_zoom}>
            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${apiKey}`}
            />
            <LayersControl position="bottomright">
                {props.site.layerNames.map((l) => {
                    return (
                        <LayersControl.Overlay name={l} checked>
                            <FeatureGroup>
                                {

                                    props.site.placemarks.filter((p) => p.layerName === l).map((p) => {
                                        return mapMarker(p);
                                    })
                                }

                            </FeatureGroup>
                        </LayersControl.Overlay>

                    )

                })}
            </LayersControl>

        </MapContainer>



    </>

    )
}

export default FlyingSiteMap;
