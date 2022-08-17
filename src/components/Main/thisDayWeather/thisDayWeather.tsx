import './thisDayWeather.css';
import { GlobalSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';
import React from 'react';
import moment from "moment";

const ThisDayWeather = ({todayWeather}: any) => {
    const newLocal = 'thisDayWeather';
  return (
    <div className={newLocal}>
        <div className='top-block'>
            <div className='wrapper-topBlock'>
            <div className='time'>{moment().format('MMMM Do YYYY, h:mm:ss a')}</div> 
                <div className='currentIcon'>
                  <GlobalSvgSelector icon = {todayWeather.weather[0].icon}/>
                </div>
                <div className='currentTemp'><span>Temperature Now:</span> {Math.floor(todayWeather.main.temp)}°C</div>
                <div className='currentTemp'><span>Feels Like:</span> {Math.floor(todayWeather.main.feels_like)}°C</div>
                <div className='currentTemp'><span>Weather Condition:</span> {todayWeather.weather[0].main}</div>
                <div className='currentTemp'><span>Current Location:</span> {todayWeather.name}</div>
                {/* <div className='currentDay'>{Math.floor(todayWeather.wind.speed)} м/с</div> */}
            </div>
        </div>
    </div>
  )
}

export default ThisDayWeather;
