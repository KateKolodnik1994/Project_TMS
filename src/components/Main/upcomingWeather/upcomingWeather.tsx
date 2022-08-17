import './upcomingWeather.css';
import { GlobalSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';
import React from 'react';

function FiveDaysWeather({upcomingWeather}: any) {
    return (
      <>
      {
      upcomingWeather?.list.map((currentDay: any, index: any) => {
        return (
        <div className='cards_wrapper' key={index}>
          <div className='currentIcon'>
            <GlobalSvgSelector icon = {currentDay.weather[0].icon}/>
          </div>
          <div className='currentDay'>{currentDay.dt_txt}</div>
          <div className='currentDay'><span>Temperature Now:</span> {Math.floor(currentDay.main.temp)}°C</div>
          <div className='currentDay'><span>Feels Like:</span> {Math.floor(currentDay.main.feels_like)}°C</div>
          <div className='currentDay'><span>Weather Condition:</span> {currentDay.weather[0].main}</div>
        </div>
        )
      } )
    } 
    </>)
  }

export default FiveDaysWeather;
