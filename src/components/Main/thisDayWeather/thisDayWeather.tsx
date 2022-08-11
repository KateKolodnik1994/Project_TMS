import './thisDayWeather.css';
import { GlobalSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';
import React from 'react';


type Weather = {
    main: {
      temp: number;
      feels_like: number;
    };
    name: string;
  };

interface Props {
    weather: Weather;
  }
  const ThisDayWeather = ({weather}: Props) => {
    const newLocal = 'thisDayWeather';
  return (
    <div className={newLocal}>
        <div className='top-block'>
            <div className='wrapper-topBlock'>
                <div className='currentTemp'>{Math.floor(weather.main.temp)}°</div>
                <div className='currentDay'>{}</div>
            </div>
            <GlobalSvgSelector id = 'sun'/>
        </div>
        <div className='bottom-block'>
            <div className='currentTime'>Время: <span>13.23</span></div>
            <div className='currentPlace'>{weather.name}</div>
        </div>
    </div>
  )
}

export default ThisDayWeather;
