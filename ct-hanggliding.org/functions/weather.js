require('dotenv').config()


// https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}


// Talcott (Weatogue) forecast:
// https://api.weather.gov/gridpoints/BOX/17,56/forecast

const nwsForecastExample = `{
    "@context": [
        "https://geojson.org/geojson-ld/geojson-context.jsonld",
        {
            "@version": "1.1",
            "wx": "https://api.weather.gov/ontology#",
            "geo": "http://www.opengis.net/ont/geosparql#",
            "unit": "http://codes.wmo.int/common/unit/",
            "@vocab": "https://api.weather.gov/ontology#"
        }
    ],
    "type": "Feature",
    "geometry": {
        "type": "Polygon",
        "coordinates": [
            [
                [
                    -72.779746799999998,
                    41.861821800000001
                ],
                [
                    -72.784522999999993,
                    41.8403074
                ],
                [
                    -72.755630099999991,
                    41.836745800000003
                ],
                [
                    -72.750847899999997,
                    41.8582599
                ],
                [
                    -72.779746799999998,
                    41.861821800000001
                ]
            ]
        ]
    },
    "properties": {
        "updated": "2022-10-25T22:27:55+00:00",
        "units": "us",
        "forecastGenerator": "BaselineForecastGenerator",
        "generatedAt": "2022-10-25T22:41:43+00:00",
        "updateTime": "2022-10-25T22:27:55+00:00",
        "validTimes": "2022-10-25T16:00:00+00:00/P8DT6H",
        "elevation": {
            "unitCode": "wmoUnit:m",
            "value": 78.943200000000004
        },
        "periods": [
            {
                "number": 1,
                "name": "Tonight",
                "startTime": "2022-10-25T18:00:00-04:00",
                "endTime": "2022-10-26T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 61,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "NE",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers,60?size=medium",
                "shortForecast": "Rain Showers Likely",
                "detailedForecast": "Rain showers likely before 1am, then rain showers likely and areas of fog. Cloudy, with a low around 61. Northeast wind around 5 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."
            },
            {
                "number": 2,
                "name": "Wednesday",
                "startTime": "2022-10-26T06:00:00-04:00",
                "endTime": "2022-10-26T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 69,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "3 mph",
                "windDirection": "E",
                "icon": "https://api.weather.gov/icons/land/day/rain_showers,60/rain_showers,40?size=medium",
                "shortForecast": "Rain Showers Likely",
                "detailedForecast": "Rain showers likely and areas of fog. Cloudy, with a high near 69. East wind around 3 mph. Chance of precipitation is 60%. New rainfall amounts between a tenth and quarter of an inch possible."
            },
            {
                "number": 3,
                "name": "Wednesday Night",
                "startTime": "2022-10-26T18:00:00-04:00",
                "endTime": "2022-10-27T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 54,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "6 mph",
                "windDirection": "SW",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers,20/bkn?size=medium",
                "shortForecast": "Slight Chance Rain Showers then Mostly Cloudy",
                "detailedForecast": "A slight chance of rain showers before 8pm. Mostly cloudy, with a low around 54. Southwest wind around 6 mph. Chance of precipitation is 20%. New rainfall amounts less than a tenth of an inch possible."
            },
            {
                "number": 4,
                "name": "Thursday",
                "startTime": "2022-10-27T06:00:00-04:00",
                "endTime": "2022-10-27T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 68,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 to 10 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/day/few?size=medium",
                "shortForecast": "Sunny",
                "detailedForecast": "Sunny, with a high near 68. Northwest wind 5 to 10 mph."
            },
            {
                "number": 5,
                "name": "Thursday Night",
                "startTime": "2022-10-27T18:00:00-04:00",
                "endTime": "2022-10-28T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 39,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "8 mph",
                "windDirection": "N",
                "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
                "shortForecast": "Mostly Clear",
                "detailedForecast": "Mostly clear, with a low around 39. North wind around 8 mph."
            },
            {
                "number": 6,
                "name": "Friday",
                "startTime": "2022-10-28T06:00:00-04:00",
                "endTime": "2022-10-28T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 57,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "8 mph",
                "windDirection": "NE",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "shortForecast": "Mostly Sunny",
                "detailedForecast": "Mostly sunny, with a high near 57. Northeast wind around 8 mph."
            },
            {
                "number": 7,
                "name": "Friday Night",
                "startTime": "2022-10-28T18:00:00-04:00",
                "endTime": "2022-10-29T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 35,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "6 mph",
                "windDirection": "NE",
                "icon": "https://api.weather.gov/icons/land/night/sct?size=medium",
                "shortForecast": "Partly Cloudy",
                "detailedForecast": "Partly cloudy, with a low around 35. Northeast wind around 6 mph."
            },
            {
                "number": 8,
                "name": "Saturday",
                "startTime": "2022-10-29T06:00:00-04:00",
                "endTime": "2022-10-29T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 58,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "NE",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "shortForecast": "Mostly Sunny",
                "detailedForecast": "Mostly sunny, with a high near 58. Northeast wind around 5 mph."
            },
            {
                "number": 9,
                "name": "Saturday Night",
                "startTime": "2022-10-29T18:00:00-04:00",
                "endTime": "2022-10-30T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 39,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "3 mph",
                "windDirection": "N",
                "icon": "https://api.weather.gov/icons/land/night/few?size=medium",
                "shortForecast": "Mostly Clear",
                "detailedForecast": "Mostly clear, with a low around 39. North wind around 3 mph."
            },
            {
                "number": 10,
                "name": "Sunday",
                "startTime": "2022-10-30T06:00:00-04:00",
                "endTime": "2022-10-30T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 61,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "E",
                "icon": "https://api.weather.gov/icons/land/day/sct?size=medium",
                "shortForecast": "Mostly Sunny",
                "detailedForecast": "Mostly sunny, with a high near 61. East wind around 5 mph."
            },
            {
                "number": 11,
                "name": "Sunday Night",
                "startTime": "2022-10-30T18:00:00-04:00",
                "endTime": "2022-10-31T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 44,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "3 mph",
                "windDirection": "E",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers/rain_showers,40?size=medium",
                "shortForecast": "Chance Rain Showers",
                "detailedForecast": "A chance of rain showers after 7pm. Mostly cloudy, with a low around 44. East wind around 3 mph. Chance of precipitation is 40%."
            },
            {
                "number": 12,
                "name": "Monday",
                "startTime": "2022-10-31T06:00:00-04:00",
                "endTime": "2022-10-31T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 61,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "2 to 6 mph",
                "windDirection": "E",
                "icon": "https://api.weather.gov/icons/land/day/rain_showers,50?size=medium",
                "shortForecast": "Rain Showers Likely",
                "detailedForecast": "Rain showers likely. Cloudy, with a high near 61. East wind 2 to 6 mph. Chance of precipitation is 50%."
            },
            {
                "number": 13,
                "name": "Monday Night",
                "startTime": "2022-10-31T18:00:00-04:00",
                "endTime": "2022-11-01T06:00:00-04:00",
                "isDaytime": false,
                "temperature": 51,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "E",
                "icon": "https://api.weather.gov/icons/land/night/rain_showers,50?size=medium",
                "shortForecast": "Rain Showers Likely",
                "detailedForecast": "Rain showers likely. Cloudy, with a low around 51. East wind around 5 mph. Chance of precipitation is 50%."
            },
            {
                "number": 14,
                "name": "Tuesday",
                "startTime": "2022-11-01T06:00:00-04:00",
                "endTime": "2022-11-01T18:00:00-04:00",
                "isDaytime": true,
                "temperature": 63,
                "temperatureUnit": "F",
                "temperatureTrend": null,
                "windSpeed": "5 mph",
                "windDirection": "NW",
                "icon": "https://api.weather.gov/icons/land/day/rain_showers,40?size=medium",
                "shortForecast": "Chance Rain Showers",
                "detailedForecast": "A chance of rain showers. Mostly cloudy, with a high near 63. Northwest wind around 5 mph. Chance of precipitation is 40%."
            }
        ]
    }
}`

const nwsForecastErrorExample = `{
    "correlationId": "26a1c2cd",
    "title": "Unexpected Problem",
    "type": "https://api.weather.gov/problems/UnexpectedProblem",
    "status": 500,
    "detail": "An unexpected problem has occurred.",
    "instance": "https://api.weather.gov/requests/26a1c2cd"
}`



exports.handler = async (event,context) => {
    try {
        // do something here to query NWS for a response
        // may need to retry x times with n delay
        if (true) {
            return {
                statusCode:200,
                body:nwsForecastExample,
                contentType:'application/json',
            }
        }
        else{
            return {
                statusCode:500,
                body:nwsForecastErrorExample,
                contentType:'application/json',
            }

        }
        
    } catch (error) {
        console.log(error)
        return {
            statusCode:500,
            body:"An error occurred getting the forecast.",
        }
        
    }
}