export interface IFlyingSite {
    id: string,
    name: string,
    mapCenter: {
        lat: number,
        lng: number,
    }
}

const FlyingSites: [IFlyingSite] = [{
    id: "Talcott",
    name: "Talcott Mountain",
    mapCenter: {
        lat: 41.83499996710632,
        lng: -72.79802914215554
    }
}]

export default FlyingSites