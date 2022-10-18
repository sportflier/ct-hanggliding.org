import React, { ReactNode, useState, useEffect } from 'react';
import {
    MapContainer, TileLayer, Popup,
    FeatureGroup,
    LayersControl,
    Polygon,
    Marker,
    // useMap, useMapEvents
} from 'react-leaflet';
import axios from 'axios';


import { IFlyingSite, IDetailedPlacemark, IAirspaceRing, IBoundary } from './../../Data/flying-sites';
// import GetApiKey from './../../Data/api-connect';
import { SimplePerimeter, geoPosition } from './GlideFunctions'

interface IFlyingSiteMap {
    site: IFlyingSite,
}

const mapMarker = (placemark: IDetailedPlacemark) => {
    return (
        <Marker position={placemark} key={placemark.description}>
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

const PopupContent = (content?: ReactNode) => {
    return (content !== undefined ? <Popup>{content}</Popup> : <></>)
}


const FlyingSiteMap = (props: IFlyingSiteMap) => {
    const map_zoom = 15;
    const [mapCenter] = useState(props.site.mapCenter);
    const [tileLayer, setTileLayer] = useState(<></>)

    useEffect(() => {
        axios.get("/api/mapping").then((response) => {
            const data = response.data;
            const {key} = data;
            setTileLayer(            <TileLayer
                attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
                url={`https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=${key}`}
            />)
        })


    }, []);



    return (<>
        <MapContainer center={[mapCenter.lat, mapCenter.lng]} zoom={map_zoom}>
            ${tileLayer}
            <LayersControl position="bottomright">
                {props.site.layerNames.map((l) => {
                    return (
                        <LayersControl.Overlay name={l.name} checked={l.checked} key={l.name}>
                            <FeatureGroup>
                                {
                                    props.site.airspaceRings.filter((r) => r.layerName === l.name).map((r) => {
                                        return <FeatureGroup key={`airspaceRing-${r.description}`}>
                                            {PopupContent(r.popupContent)}
                                            {AirspacePolygon(r)}
                                        </FeatureGroup>
                                    })
                                }
                                {
                                    props.site.placemarks.filter((p) => p.layerName === l.name).map((p) => {
                                        return mapMarker(p);
                                    })
                                }
                                {
                                    props.site.boundaries.filter((b) => b.layerName === l.name).map((b) => {
                                        return <FeatureGroup key={`boundary-${b.description}`}>
                                            {PopupContent(b.popupContent)}
                                            {BoundaryPolygon(b)}
                                        </FeatureGroup>

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
