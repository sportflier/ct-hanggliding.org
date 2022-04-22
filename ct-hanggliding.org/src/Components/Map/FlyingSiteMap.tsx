import React, { useState } from 'react';
import {
    MapContainer, TileLayer, Popup,
    FeatureGroup,
    LayersControl,
    Polygon,
    Marker,
} from 'react-leaflet';

import { IFlyingSite, IDetailedPlacemark, IAirspaceRing, IBoundary } from './../../Data/flying-sites';
import GetApiKey from './../../Data/api-connect';
import { SimplePerimeter, geoPosition } from './GlideFunctions'

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


const AirspacePolygon: React.FC<IAirspaceRing> = (props) => {

    if (props !== null) {
        let miles = props.radiusNm * 1.15077945
        let perimeter = SimplePerimeter(props.lat, props.lng, miles);
        if (perimeter.length > 0) {
            let clr = props.airspaceType === "C" ? "#872a58" : "#144888";
            return <Polygon positions={perimeter} pathOptions={{ color: clr }} />
        }
    }

    return <></>;
}

const KmlCoordinatesToPositions = (coords: string) => {
    let points: geoPosition[] = [];
    let coord = coords.trim().split(" ");
    coord.forEach(c => {
        let d = c.split(",")
        let dest: geoPosition = { lat: + d[1], lng: + d[0] }
        points = [...points, dest]
    });
    return points;
}

const BoundaryPolygon: React.FC<IBoundary> = (props) => {
    if (props !== null) {

        let perimeter = KmlCoordinatesToPositions(props.linearRingCoordinates);
        if (perimeter.length > 0) {
            return <Polygon positions={perimeter} pathOptions={{ color: props.color }} />
        }
    }

    return <></>;

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
                                {
                                    props.site.airspaceRings.filter((r) => r.layerName === l).map((r) => {
                                        return AirspacePolygon(r);
                                    })
                                }
                                {
                                    props.site.boundaries.filter((b) => b.layerName === l).map((b) => {
                                        return BoundaryPolygon(b);
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
