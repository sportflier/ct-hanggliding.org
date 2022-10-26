import React, { useState, useEffect } from 'react'
import './Forecast.scss'
import axios from 'axios';

interface IForecastPeriod {
    detailedForecast:string,
    icon:string,
    isDaytime:boolean,
    name:string,
    number:number,
    shortForecast:string,
    temperature:number,
    temperatureUnit:string,
    windDirection:string,
    windSpeed:string,
    startTime:string,
}



export default function Forecast() {

    // TODO: make these parameters for this control
    const launchableDirections = ['W','WNW', 'NW']
    const maxWind = 15;
    const maxGust = 8;

    const [forecastResult, setForecastResult] = useState(
        <div>Waiting to get forecast.</div>
    )

    const requestForecastResult = () => {
        try {
            axios.get('/api/weather').then((response) => {
                const data = response.data;
                const {properties} = data;
                // const periods: [IForecastPeriod] = data.map((p:IForecastPeriod) => {
                //     detailedForecast: p.detailedForecast
                // })
                const {periods} = properties;
                const daytimePeriods = periods.filter((p:IForecastPeriod) => p.isDaytime === true)
                console.log(daytimePeriods)
                const forecastInfo = 
                    daytimePeriods.map((p:IForecastPeriod) => {
                        const hasGoodDirection = launchableDirections.includes(p.windDirection)
                        const speed = Number(p.windSpeed.split(' ')[0])
                        const hasBadSpeed = speed > maxWind
                        const idealStyle = hasGoodDirection && !hasBadSpeed ? 'ideal-wind' : ''

                        return(
                            <div className={idealStyle}>
                            <h2>{p.name} {p.startTime.replace('T06:00:00-04:00','')}</h2>
                            <img src={p.icon} alt='' />
                            <p>{p.detailedForecast}</p>
                            
                            </div>
                        )

                    })
                
                setForecastResult(<>{forecastInfo}</>)
            })
            
        } catch (error) {
            setForecastResult(<div>An error occurred retrieving the weather forecast from NWS. Refresh this page to try again.</div>)
        }
    }

    useEffect(() => {
        requestForecastResult()
    },[])

    return forecastResult


}