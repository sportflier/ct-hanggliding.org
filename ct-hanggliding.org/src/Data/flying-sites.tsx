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
    popupContent?: ReactNode,
}

export interface IBoundary {
    layerName?: string,
    description: string,
    color: string,
    linearRingCoordinates: string, //https://developers.google.com/kml/documentation/kmlreference?hl=en#example_10
    popupContent?: ReactNode,
}

export interface ILayerInfo {
    name: string,
    checked?: boolean,
}

// export interface IPlacemarks {
//     [index: number]: IDetailedPlacemark
// }
export interface IFlyingSite {
    id: string,
    name: string,
    mapCenter: geoPosition,
    layerNames: Array<ILayerInfo>,
    placemarks: Array<IDetailedPlacemark>,
    airspaceRings: Array<IAirspaceRing>,
    boundaries: Array<IBoundary>,
}

const FlyingSites: [IFlyingSite] = [{
    id: "Talcott",
    name: "Talcott Mountain",
    mapCenter: {
        lat: 41.8390084,
        lng: -72.8040457
    },
    layerNames: [
        {
            name: "Launch",
            checked: true,
        },
        {
            name: "Landing Zone",
            checked: true,
        },
        {
            name: "Nearby Airports",
            checked: false,
        },
        {
            name: "Landing Forbidden",
            checked: true,
        },
        {
            name: "Bradley Class C Outer Ring",
            checked: false,
        },
        {
            name: "Bradley Class C Inner Ring",
            checked: false,
        },
    ],
    placemarks: [{
        description: "Launch",
        lat: 41.83500618941068,
        lng: -72.79806566380861,
        descriptionNode: <>
            <ul>
                <li>Coordinates: <a href="https://maps.app.goo.gl/Yegirsgug2ewEyyJA" target="_blank" rel="noreferrer">41.83500618941068, -72.79806566380861</a></li>
                <li>Elevation: 800' MSL / 650' AGL</li>
                <li>Direction: 290&deg;</li>
                <li>Wind: Ideal wind is 290&deg; at 10 to 12mph, soarable in 260&deg;&#8211;330&deg;.</li>
                <li>Glide ratio to LZ: 4.0</li>
            </ul>
        </>,
        layerName: "Launch",
    },
    {
        description: "Bradley International Airport",
        lat: 41.939032222,
        lng: -72.684315833,
        descriptionNode: <>
        </>,
        layerName: "Nearby Airports",
    },
    {
        description: "Simsbury Airport",
        lat: 41.9161944,
        lng: -72.7769444,
        descriptionNode: <></>,
        layerName: "Nearby Airports",
    },
    ],
    airspaceRings: [
        {
            description: "Bradley International Airport",
            lat: 41.939032222,
            lng: -72.684315833,
            layerName: "Bradley Class C Inner Ring",
            airspaceType: "C",
            radiusNm: 5,
            floor: 0,
            ceiling: 42,
            popupContent: <>
                <p><strong>Class C Airspace (inner ring):</strong></p>
                <p>Airspace is controlled from the surface up to 4200' MSL, in a radius 5 nautical miles from Bradley International Airport.</p>
            </>
        },
        {
            description: "Bradley International Airport",
            lat: 41.939032222,
            lng: -72.684315833,
            layerName: "Bradley Class C Outer Ring",
            airspaceType: "C",
            radiusNm: 10,
            floor: 21,
            ceiling: 42,
            popupContent: <>
                <p><strong>Class C Airspace (outer ring):</strong></p>
                <p>Airspace is controlled from 2100' MSL to 4200' MSL, in a radius 10 nautical miles from Bradley International Airport.</p>
                <p><strong><i>Do not exceed 2100’ MSL unless you have flown out from underneath the Class C shelf.</i></strong></p>
            </>
        },
    ],
    boundaries: [{
        description: "Landing Zone",
        color: "blue",
        layerName: "Landing Zone",
        linearRingCoordinates: "-72.80852372981697,41.83692135332383,46.37905287025112 -72.80726247858762,41.83662789760826,45.55427619335702 -72.80702814355676,41.83704499967607,45.24519981064379 -72.80681656603468,41.83734938726409,45.16793071496549 -72.80679006540703,41.83750166451756,45.09066161928718 -72.80675617286724,41.83766520460711,44.93612342793057 -72.8065745231273,41.83786251982081,45.05199399166354 -72.80612077023574,41.83770443785979,45.16786455539651 -72.80584868856573,41.83786782910298,45.28373511912948 -72.80579000025998,41.83799213780195,45.39960568286246 -72.80574301903435,41.83815926992345,45.47627597131287 -72.80660314840792,41.83832298393772,45.55294625976329 -72.80692657116282,41.83833469242426,45.55298634983792 -72.80710885714736,41.83842757104704,45.55302643991254 -72.80736498789145,41.83848272573957,45.55310662006179 -72.80734478551281,41.83857693561287,45.55318680021104 -72.80764185203856,41.83864111548169,45.55326698036028 -72.80811699126487,41.8387691186572,45.55358770095729 -72.8082097364352,41.8381471267334,45.55422914215129 -72.8083743277556,41.83777348703866,45.7185031234462 -72.80842009665139,41.8374283115934,45.8827771047411 -72.80852372981697,41.83692135332383,46.37905287025112",
        popupContent: <>
            <p><strong>LZ: Original</strong></p>
<ul>
    <li>Located adjacent to the state police shooting range at <a href="https://maps.app.goo.gl/PJJZpCYt5Ay9ZYG69" target="_blank" rel="noreferrer">100 Nod Rd in Simsbury</a>.</li>
    <li>Coordinates: <a href="https://maps.app.goo.gl/TP7zetV1i8k7vWis8" target="_blank" rel="noreferrer">41.83762123782369, -72.8075181422494</a></li>
    <li>Glide ratio from launch: 4.0</li>
</ul>
        </>

    },
    {
        description: "Polo field",
        color: "red",
        layerName: "Landing Forbidden",
        linearRingCoordinates: "-72.80715865429387,41.84279072685415,46.14759215368339 -72.80748566560705,41.84294300006384,46.27392221495063 -72.80791454150129,41.84227217845835,46.24239943952836 -72.80825111294175,41.8415863694263,46.21087666410609 -72.80889087806256,41.84026138420074,46.14783111326155 -72.80912875745224,41.83923637899552,47.38522079528077 -72.80735415276915,41.83863652876811,44.91281793445305 -72.80722397360265,41.83879855124808,44.91251131507128 -72.80534827866995,41.83839079876277,45.81630510783975 -72.80477478611249,41.83889403486467,45.67021546267242 -72.80624037496034,41.83987221164794,45.94874221331622 -72.80703055035738,41.84129071522733,46.14908806372976 -72.80715865429387,41.84279072685415,46.14759215368339",
        popupContent: <>
            <strong>Landing on the polo field to the north of the original LZ is strictly prohibited. Do not land there under any circumstances unless there is a true emergency.</strong>

        </>

    },
    {
        description: "Horseshoe",
        color: "red",
        layerName: "Landing Forbidden",
        linearRingCoordinates: "-72.8048696011131,41.84065224608981,46.72979966385215 -72.80489393760344,41.8405720639775,46.69341267791249 -72.80486845452009,41.84044857131547,46.65702569197283 -72.80481945036144,41.84028494053068,46.5842517200935 -72.80461541700448,41.83998329174635,46.43870377633484 -72.80386903469702,41.83939900565085,46.17243010747796 -72.8033891818808,41.83913456933194,46.18156746153356 -72.80296558316982,41.83906246862073,46.19070481558917 -72.80261644484602,41.8391947238668,46.17125617069973 -72.80235210735658,41.83940043130196,46.15180752581031 -72.80219579362871,41.8396674143448,46.13235888092087 -72.80225010482391,41.83990382157177,46.11291023603144 -72.80249216558927,41.8400137006014,45.99210968310618 -72.80279895550288,41.84009794309623,45.87130913018093 -72.80317566700685,41.84027098682209,45.75050857725567 -72.80345777667799,41.84032260670328,45.72030843902436 -72.80372115795679,41.84030889922494,45.69010830079304 -72.80402275479346,41.8405283601481,45.65990816256173 -72.80433336072124,41.84066737766609,45.64480809344607 -72.80449338889883,41.84072547034558,45.63725805888824 -72.80467409449014,41.84074609322504,45.63348304160932 -72.80484424828839,41.84068740874455,45.62970802433041",
        popupContent: <>
            <strong>Landing in the field immediately south of Holcomb field is forbidden unless an emergency requires it.</strong>

        </>
    },
    {
        description: "Holcomb LZ",
        color: "blue",
        layerName: "Landing Zone",
        linearRingCoordinates: "-72.80359826435271,41.84058192773008,46.52242045321415 -72.80227215255273,41.84007345665183,46.17304411722486 -72.80214928684532,41.8401703337487,46.55518853690197 -72.80253088783374,41.8413304390626,46.34325165661534 -72.80333675957007,41.84317652165441,46.13131477632871 -72.80378553909711,41.841881168916,46.25353530035542 -72.8035115975851,41.84164884831606,46.27797940516076 -72.80343294775106,41.84143710857029,46.32686761477144 -72.80359826435271,41.84058192773008,46.52242045321415",
        popupContent: 
        <><p><strong>Holcomb LZ</strong></p>
        <ul>
    <li>Located on Nod Rd &frac12; mile north of the original LZ</li>
    <li>Coordinates: <a href="https://maps.app.goo.gl/8PxKKH6M8brQYesZ8" target="_blank" rel="noreferrer">41.84187704857621, -72.80318127267603</a></li>
    <li>Glide ratio from launch: 4.3</li>
</ul>
</>
    },
    {
        description: "Holcomb Crops",
        color: "red",
        layerName: "Landing Forbidden",
        linearRingCoordinates: "-72.80620156192603,41.84707567783695,0 -72.80622444417051,41.84623120742847,0 -72.80622443297095,41.84532605584072,0 -72.80647458825528,41.84437651593368,0 -72.80647535554989,41.84425215147521,0 -72.8071316132165,41.84334619405647,0 -72.80695313065308,41.84323055877164,0 -72.80648900692948,41.84330105787771,0 -72.8061539336119,41.84364825403513,0 -72.80624881639272,41.84286728385568,0 -72.80630878203203,41.84212988815148,0 -72.806165931062,41.8415789971745,0 -72.80527176601383,41.84107346013185,0 -72.80515243599744,41.84118089283703,0 -72.80434210879612,41.84126818518827,0 -72.80382922568069,41.84187098892338,0 -72.80337647394396,41.8432485044104,0 -72.80365031969227,41.84405649572659,0 -72.80397233219972,41.84478498669154,0 -72.80443739331469,41.84514041814105,0 -72.80545104711153,41.84589541636537,0 -72.80582125957835,41.84714905279407,0 -72.80601098700343,41.84732454857037,0 -72.80620156192603,41.84707567783695,0",
        popupContent: <>
            <p><strong>Holcomb Crops</strong></p>
            <strong>Do not land in the Holcomb active crops, unless in an emergency.</strong>

        </>
    },
    {
        description: "Adjacent Property",
        color: "red",
        layerName: "Landing Forbidden",
        linearRingCoordinates: "-72.80206492830482,41.84222714229914,0 -72.80168401877231,41.84134834135072,0 -72.8014458458052,41.84038088107495,0 -72.80111384224193,41.84034757527694,0 -72.80076965289803,41.84110200669527,0 -72.80032249131168,41.84141429097606,0 -72.80046386658631,41.84155537539887,0 -72.8007013546321,41.84175887378041,0 -72.80068790822361,41.84197088826497,0 -72.80060479234459,41.84222770594994,0 -72.80021511873397,41.84240479560787,0 -72.80018674229731,41.84285678507847,0 -72.80104179236282,41.84291931927855,0 -72.80158839870703,41.8430708549787,0 -72.80197548298709,41.84280929357585,0 -72.80206492830482,41.84222714229914,0",
        popupContent: <>
            <strong>Do not land on the property to the east of Holcomb LZ, unless in an emergency.</strong>

        </>
    },
],

}]

export default FlyingSites