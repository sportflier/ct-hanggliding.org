import React, { useState, useEffect } from 'react'
import './Forecast.scss'
import axios from 'axios';
import Spinner from './../Spinner'

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
    // const maxWind = 15;
    // const maxGust = 8;

    const loadingMessage = <><div className='d-flex fl-col fl-center'><div>Forecast is being loaded, please wait...</div><Spinner></Spinner></div></>

    const [forecastResult, setForecastResult] = useState(
        loadingMessage
    )

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

    const requestForecastResult = async () => {
        setForecastResult(loadingMessage)
        try {

            const response = await axios.get('/api/weather')

            // console.log(response.status)
            // console.log("🚀 ~ file: Forecast.tsx ~ line 68 ~ requestForecastResult ~ status", response.status)

            if(response.status === 200){
                const data = response.data;
                const {properties} = data;
                const {periods} = properties;
                const daytimePeriods = periods.filter((p:IForecastPeriod) => p.isDaytime === true)
                console.log(daytimePeriods)
                const forecastInfo = 
                    daytimePeriods.map((p:IForecastPeriod) => {
                        const hasGoodDirection = launchableDirections.includes(p.windDirection)
                        const idealStyle = hasGoodDirection ? 'ideal-wind' : ''

                        return(
                            <div className={`forecast-card mb-1 ${idealStyle}`} key={p.number}>
                            <h2>{p.name} &ndash; {formatTimeString(p.startTime)}</h2>
                            <div className="forecast-details">
                                <img src={p.icon} alt={p.shortForecast} />
                                <div>{p.detailedForecast}</div>

                            </div>
                            
                            </div>
                        )

                    })
                
                setForecastResult(<>{forecastInfo}</>)

            }
            else {
                console.log('NWS returned error result...')
                setForecastResult(<><div>The NWS weather service returned an error. Please click the button to try again.</div><button onClick={requestForecastResult}>Get NWS Forecast</button></>)
    
            }

            
        } catch (error) {
            setForecastResult(<><div>An error occurred while retrieving the weather forecast from NWS. Please click the button to try again.</div><button onClick={requestForecastResult}>Get NWS Forecast</button></>)

        }
    }

    useEffect(() => {
        requestForecastResult()
    },[]) // eslint-disable-line

    return forecastResult

}