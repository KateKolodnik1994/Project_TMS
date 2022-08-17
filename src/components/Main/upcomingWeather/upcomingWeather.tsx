import './upcomingWeather.css';
import { GlobalSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';
import React from 'react';

// interface Day {
//   temp_day: string;
//   day_dt: string;
// }

// interface Props {
//   upcomingWeather: Upcoming_weather;
// }

// export type Upcoming_weather = {
//   city: {
//     country: string,
//     name: string,
//   },
//   list: [{
//     dt_txt: string,
//     main: {
//       temp: number,
//       feels_like: number,
//       humidity: number,
//     },
//     weather: [{
//       main: string,
//       icon: string,
//     }];
//     wind: {
//       speed: number,
//     }
//   }]
//   }

const FiveDaysWeather = ({upcomingWeather}: any) => {
    const Local = 'upcomingWeather';
  return (
    <div className={upcomingWeather}>
        <div className='cardWrapper'>
            <div className='card'>
                <div className='currentDay'>Temperature Now: {Math.floor(upcomingWeather.list[0].main.temp)}°C</div>
                <div className='currentDay'>Feels Like: {Math.floor(upcomingWeather.list[0].main.feels_like)}°C</div>
                <div className='currentDay'>Weather Condition: {upcomingWeather.list[0].weather[0].main}</div>
                {/* <div className='currentDay'>Temperature Now: {Math.floor(upcomingWeather.list[1].main.temp)}°C</div>                 */}
            </div>
            
            {/* <GlobalSvgSelector id = {todayWeather.id}/> */}
            
        </div>
    </div>
  )
}


export default FiveDaysWeather;
