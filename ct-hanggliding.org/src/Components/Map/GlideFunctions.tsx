export interface IGlideInputs {
    glider: string;
    glideProfile: string; // just used for the label on the panel
    glideSpeed: number; // MPH
    sinkRate: number; // FPM
    glideDirection: number;
    windDirection: number;
    windSpeed: number; // MPH
    altitude: number; // feet (starting point)
    altitudeFinish: number; // feet (altitude at end of glide)
}


export interface IResultProps {
    Title: string;
    Speed: number;
    SpeedUnits: string;
    Duration: number;
    Distance: number;
    DistanceUnits: string;
    GlideDirection: number;
    WindDirection: number;
    NetDirection: number;
    GlideRatio: number;
}


const feetPerMile = 5280;


export interface GlideCalculation {
    GroundSpeed: number,
    GlideRatio: number,
    Duration: number,
    Distance: number,
    Direction: number,
    Error: string
}

export interface geoPosition {
    lat: number,
    lng: number,
}

export interface placeMark extends geoPosition {
    description: string,
}

export interface earthPosition extends geoPosition {
    name: string,
    description: string,
    elevation: null | number,
    heading: null | number,
}

export interface pointOfInterest {
    name: string,
    description: string,
    points: Array<earthPosition>
}

export interface aircraftPosition extends earthPosition {
    altitude: null | number
}

// todo: obsolete
export interface position extends geoPosition {
    aircraftElevation: null | number,
    groundElevation: null | number,
}


export const CalculateGlide = (params: IGlideInputs) => {

    if (params.altitudeFinish >= params.altitude) {
        let errResult: GlideCalculation = {
            GroundSpeed: 0,
            GlideRatio: 0,
            Duration: 0,
            Distance: 0,
            Direction: 0,
            Error: "Starting altitude must be greater than ending altitude."
        }

        return errResult;
    }

    let x = params.glideSpeed * Math.cos(params.glideDirection * Math.PI / 180);
    let y = params.glideSpeed * Math.sin(params.glideDirection * Math.PI / 180);
    let x2 = params.windSpeed * Math.cos(params.windDirection * Math.PI / 180);
    let y2 = params.windSpeed * Math.sin(params.windDirection * Math.PI / 180);
    let x3 = x + x2;
    let y3 = y + y2;
    let v3 = Math.sqrt(x3 * x3 + y3 * y3);
    let a3 = Math.atan2(y3, x3);

    let horizontalFPM = (v3 / 60) * feetPerMile; // horizontal speed in feet per minute
    let glideRatioCalc = horizontalFPM / params.sinkRate;
    let duration = (params.altitude - params.altitudeFinish) / params.sinkRate; // minutes, time to reach finish altitude
    let distance = (duration * horizontalFPM) / feetPerMile; // distance travelled reaching finish altitude
    let groundDirection = a3 * 180 / Math.PI;

    if (groundDirection < 0) {
        groundDirection += 360;
    }

    let result: GlideCalculation = {
        GroundSpeed: v3,
        GlideRatio: glideRatioCalc,
        Duration: duration,
        Distance: distance,
        Direction: groundDirection,
        Error: ""
    }

    return result;
}

const toDeg = (n: number) => { return n * 180 / Math.PI; };
const toRad = (n: number) => { return n * Math.PI / 180; };


const DestinationCoord = (lat: number, lng: number, bearing: number, distance: number) => {
    /** http://www.movable-type.co.uk/scripts/latlong.html
    * φ is latitude, λ is longitude, 
    * θ is the bearing (clockwise from north), 
    * δ is the angular distance d/R; 
    * d being the distance travelled, R the earth’s radius*
    **/
    // Distances in miles

    let radius = 3959; // miles
    let δ = distance / radius; // angular distance in radians
    let θ = toRad(bearing);
    let φ1 = toRad(lat);
    let λ1 = toRad(lng);

    let φ2 = Math.asin(Math.sin(φ1) * Math.cos(δ) +
        Math.cos(φ1) * Math.sin(δ) * Math.cos(θ));

    let λ2 = λ1 + Math.atan2(Math.sin(θ) * Math.sin(δ) * Math.cos(φ1),
        Math.cos(δ) - Math.sin(φ1) * Math.sin(φ2));
    // normalise to -180..+180°
    λ2 = (λ2 + 3 * Math.PI) % (2 * Math.PI) - Math.PI;

    return [toDeg(λ2), toDeg(φ2)];
}

export const GlidePerimeter = (params: IGlideInputs, origin: geoPosition, segments: number) => {
    let wedge = 360 / segments;
    let points: position[] = [];
    for (let angle = 0; angle < 360; angle += wedge) {
        params.glideDirection = angle;
        let glide = CalculateGlide(params);
        // find a lat/long based on origin, direction of glide, and distance of glide
        // https://www.fcc.gov/media/radio/find-terminal-coordinates
        // https://gis.stackexchange.com/questions/5821/calculating-latitude-longitude-x-miles-from-point
        // http://jsfiddle.net/jonataswalker/jbks778d/

        let coord = DestinationCoord(origin.lat, origin.lng, glide.Direction, glide.Distance);

        let dest: position = { lat: coord[1], lng: coord[0], aircraftElevation: params.altitudeFinish, groundElevation: null };
        points = [...points, dest];
    };
    return points;

}

export const SimplePerimeter = (lat: number, lng: number, distance: number, segments: number = 36) => {
    let wedge = 360 / segments;
    let points: geoPosition[] = [];
    for (let angle = 0; angle < 360; angle += wedge) {

        let coord = DestinationCoord(lat, lng, angle, distance);

        let dest: geoPosition = { lat: coord[1], lng: coord[0] }
        points = [...points, dest];
    };
    return points;

}



export const GlideSlope = (params: IGlideInputs, origin: position, segments: number, direction: number) => {
    // Return lat, lng & altitude along projected slope.
    // We'll use this later to compare against a terrain map.

    // Get the glide distance along a specific direction
    // divide the distance by the required segments
    // make sure the endpoint is in the set

}