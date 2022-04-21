import { geoPosition, placeMark } from "../Components/Map/GlideFunctions"

export interface IPlacemarks {
    [index: number]: placeMark
}
export interface IFlyingSite {
    id: string,
    name: string,
    mapCenter: geoPosition,
    placemarks: [placeMark],
}

const FlyingSites: [IFlyingSite] = [{
    id: "Talcott",
    name: "Talcott Mountain",
    mapCenter: {
        lat: 41.83499996710632,
        lng: -72.79802914215554
    },
    placemarks: [{
        description: "Talcott Mountain launch. Direction (dir info), Optimal speed (speed info), Elevation info.",
        lat: 41.83499996710632,
        lng: -72.79802914215554,
    }]
}]

export default FlyingSites