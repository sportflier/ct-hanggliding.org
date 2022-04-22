import { ReactNode } from "react"
import { geoPosition, placeMark } from "../Components/Map/GlideFunctions"

export interface IDetailedPlacemark extends placeMark {
    descriptionNode: ReactNode,
    layerName?: string,
}

export interface IAirspaceRing extends placeMark {
    layerName?: string,
    radiusNm: number, // nautical miles. Note 1nm = 1.15077945 miles
    floor: number,
    ceiling: number,
    airspaceType: string,
}

export interface IBoundary {
    layerName?: string,
    description: string,
    color: string,
    linearRingCoordinates: string, //https://developers.google.com/kml/documentation/kmlreference?hl=en#example_10
}

// export interface IPlacemarks {
//     [index: number]: IDetailedPlacemark
// }
export interface IFlyingSite {
    id: string,
    name: string,
    mapCenter: geoPosition,
    layerNames: Array<string>,
    placemarks: Array<IDetailedPlacemark>,
    airspaceRings: Array<IAirspaceRing>,
    boundaries: Array<IBoundary>,
}

const FlyingSites: [IFlyingSite] = [{
    id: "Talcott",
    name: "Talcott Mountain",
    mapCenter: {
        lat: 41.83499996710632,
        lng: -72.79802914215554
    },
    layerNames: ["Launch", "Landing Zones", "Nearby Airports", "Landing Forbidden"],
    placemarks: [{
        description: "Launch",
        lat: 41.83499996710632,
        lng: -72.79802914215554,
        descriptionNode: <>
            <ul>
                <li>Coordinates: <a href="https://goo.gl/maps/VSg4LzqEr9SGETRz9" target="_blank" rel="noreferrer">41.83500618941068, -72.79806566380861</a></li>
                <li>Elevation: 800’ MSL / 650’ AGL</li>
                <li>Direction: 290°</li>
                <li>Wind: Ideal wind is 270-310@10-12, soarable in 260-320.</li>
                <li>Launching in winds more than 15mph or a gust factor of more than 8mph is not recommended.</li>
            </ul>
        </>,
        layerName: "Launch",
    },
    {
        description: "LZ – Original",
        lat: 41.83762123782369,
        lng: -72.8075181422494,
        descriptionNode: <>
            <ul>
                <li>Located adjacent to the state police shooting range at 100 Nod Rd in Simsbury.</li>
                <li>Coordinates: <a href="https://goo.gl/maps/6fXbz9tce6PgYSy49" target="_blank" rel="noreferrer">41.83762123782369, -72.8075181422494</a>.</li>
                <li>Glide ratio from launch: 4.0</li>
            </ul>

        </>,
        layerName: "Landing Zones",
    },
    {
        description: "LZ – Holcomb Field",
        lat: 41.84187704857621,
        lng: -72.80318127267603,
        descriptionNode: <>
            <ul>
                <li>Located on Nod Rd ½ mile north of the original LZ</li>
                <li>Coordinates: <a href="https://goo.gl/maps/fczFDqFkwSyMFNfn9" target="_blank" rel="noreferrer">41.84187704857621, -72.80318127267603</a></li>
                <li>Glide ratio from launch: 4.3</li>
            </ul>

        </>,
        layerName: "Landing Zones",
    },
    {
        description: "Bradley International Airport",
        lat: 41.939032222,
        lng: -72.684315833,
        descriptionNode: <>
            <p><strong>Class C Airspace:</strong></p>
            <ul>
                <li>5nm SFC to 42</li>
                <li>10nm 21 to 42</li>
            </ul>
        </>,
        layerName: "Nearby Airports",
    },
    {
        description: "Simsbury (4B9)",
        lat: 41.9161944,
        lng: -72.7769444,
        descriptionNode: <></>,
        layerName: "Nearby Airports",
    },
    {
        description: "Polo Field",
        lat: 41.8401774,
        lng: -72.8076024,
        descriptionNode: <>
            <strong>Landing on the polo field to the north of the original LZ is strictly prohibited. Do not land there under any circumstances unless there is a true emergency.</strong>
        </>,
        layerName: "Landing Forbidden",
    },],
    airspaceRings: [
        {
            description: "Bradley International Airport",
            lat: 41.939032222,
            lng: -72.684315833,
            layerName: "Nearby Airports",
            airspaceType: "C",
            radiusNm: 5,
            floor: 0,
            ceiling: 42,
        },
        {
            description: "Bradley International Airport",
            lat: 41.939032222,
            lng: -72.684315833,
            layerName: "Nearby Airports",
            airspaceType: "C",
            radiusNm: 10,
            floor: 21,
            ceiling: 42,
        },
    ],
    boundaries: [{
        description: "Primary LZ",
        color: "green",
        layerName: "Landing Zones",
        linearRingCoordinates: "-72.80858358373342,41.83692456132265,46.37905287025112 -72.80744291810495,41.83667638391184,45.55427619335702 -72.80702569396755,41.83773436360102,44.93612342793057 -72.80693366657381,41.83804446574572,45.39960568286246 -72.80731466748631,41.838474864273,45.55294625976329 -72.80810765843648,41.83780617669551,45.55422914215129 -72.80830345759198,41.83735738255753,45.8827771047411 -72.80858358373342,41.83692456132265,46.37905287025112"

    },
    {
        description: "Secondary LZ",
        color: "green",
        layerName: "Landing Zones",
        linearRingCoordinates: "-72.80359826435271,41.84058192773008,46.52242045321415 -72.80227215255273,41.84007345665183,46.17304411722486 -72.80214928684532,41.8401703337487,46.55518853690197 -72.80310762506038,41.84250347526713,46.13131477632871 -72.80359826435271,41.84058192773008,46.52242045321415"

    }, {
        description: "Polo field",
        color: "red",
        layerName: "Landing Forbidden",
        linearRingCoordinates: "-72.80720879029627,41.84276798722246,46.14759215368339 -72.80753986176268,41.84287216740832,46.27392221495063 -72.80889087806256,41.84026138420074,46.14783111326155 -72.80912875745224,41.83923637899552,47.38522079528077 -72.80746629157235,41.83869402276616,44.91281793445305 -72.80722397360265,41.83879855124808,44.91251131507128 -72.80534827866995,41.83839079876277,45.81630510783975 -72.80477478611249,41.83889403486467,45.67021546267242 -72.80624037496034,41.83987221164794,45.94874221331622 -72.80728516572965,41.84138178432265,46.14908806372976 -72.80720879029627,41.84276798722246,46.14759215368339"

    },],

}]

export default FlyingSites