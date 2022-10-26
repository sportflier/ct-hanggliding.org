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

    const requestForecastButton = () => <button onClick={requestForecastResult}>Get NWS Forecast</button>

    const [forecastResult, setForecastResult] = useState(
        <><div>Please reload this page to receive forecast data from NWS.</div></>
    )
    const [forecastReceived, setForecastReceived] = useState(false);

    

    function toMonthName(monthNumber:number) {
        const date = new Date();
        date.setMonth(monthNumber - 1);
      
        return date.toLocaleString('en-US', {
          month: 'long',
        });
      }

    function removeLeadingZero(numStr:string) {
        return numStr.startsWith('0') ? numStr.substring(1, numStr.length) : numStr
    }



    const formatTimeString = (time:string) => {
        const dateString = time.substring(0,10).split('-')
        const result = `${toMonthName(Number(dateString[1]))} ${removeLeadingZero(dateString[2])}, ${dateString[0]}`
        return result
    }

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
                            <div className={idealStyle} key={p.number}>
                            <h2>{p.name} &ndash; {formatTimeString(p.startTime)}</h2>
                            <img src={p.icon} alt='' />
                            <p>{p.detailedForecast}</p>
                            
                            </div>
                        )

                    })
                
                setForecastResult(<>{forecastInfo}</>)
                setForecastReceived(true)
            })
            
        } catch (error) {
            setForecastResult(<><div>An error occurred retrieving the weather forecast from NWS.</div>{requestForecastButton}</>)
            setForecastReceived(false)
        }
    }

    useEffect(() => {
        requestForecastResult()
    },[])

    return forecastResult


}