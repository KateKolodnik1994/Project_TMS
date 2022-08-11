import React from 'react';
import './daysWeather.css';
import { Day } from './Days';
import { GlobalSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';

type Props = {
    day: Day;
}

const Card = ( { day }: Props) => {
        const { day_name, day_info, icon_id, temp_day, temp_night, info} = day;
        return (
      <div className= 'card'>
        <div className= 'day_name'>{day.day_name}</div>
        <div className= 'day__info'>{day.day_info}</div>
        <div className= 'img'>
          <GlobalSvgSelector id={icon_id} />
        </div>
        <div className= 'temp__day'>{day.temp_day}</div>
        <div className= 'temp__night'>{day.temp_day}</div>
        <div className='info'>{day.info}</div>
      </div>
  )
}

export default Card;
