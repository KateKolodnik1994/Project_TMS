import './thisDayWeather.css';
import { GlobalSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';
import React from 'react';

const ThisDayWeather = ({todayWeather}: any) => {
    const newLocal = 'thisDayWeather';
  return (
    <div className={newLocal}>
        <div className='top-block'>
            <div className='wrapper-topBlock'>
                <div className='currentIcon'>
                  <GlobalSvgSelector icon = {todayWeather.weather[0].icon}/>
                </div>
                <div className='currentTemp'>Temperature Now: {Math.floor(todayWeather.main.temp)}°C</div>
                <div className='currentTemp'>Feels Like: {Math.floor(todayWeather.main.feels_like)}°C</div>
                <div className='currentTemp'>Weather Condition: {todayWeather.weather[0].main}</div>
                <div className='currentTemp'>Current Location: {todayWeather.name}</div>
                {/* <div className='currentDay'>{Math.floor(todayWeather.wind.speed)} м/с</div> */}
            </div>
        </div>
    </div>
  )
}

export default ThisDayWeather;
