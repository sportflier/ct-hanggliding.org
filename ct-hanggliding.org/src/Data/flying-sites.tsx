import { ReactNode } from "react"
import { geoPosition, placeMark } from "../Components/Map/GlideFunctions"

export interface IDetailedPlacemark extends placeMark {
    descriptionNode: ReactNode,
}

// export interface IPlacemarks {
//     [index: number]: IDetailedPlacemark
// }
export interface IFlyingSite {
    id: string,
    name: string,
    mapCenter: geoPosition,
    placemarks: Array<IDetailedPlacemark>,
}

const FlyingSites: [IFlyingSite] = [{
    id: "Talcott",
    name: "Talcott Mountain",
    mapCenter: {
        lat: 41.83499996710632,
        lng: -72.79802914215554
    },
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
        </>
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

        </>
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

        </>
    }]
}]

export default FlyingSites