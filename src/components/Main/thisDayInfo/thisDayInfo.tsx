import './thisDayInfo.css';
import { ThisDayItem } from './thisDayItem';

import React from 'react'
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

export interface Item {
  icon_id: string,
  name: string,
  value: any,
}

const ThisDayInfo = ({weather}: Props) => {
  const items = [
    {
      icon_id: 'temp',
      name: 'Температура',
      value: '{Math.floor(weather.main.temp)}°',
    },
    {
      icon_id: 'pressure',
      name: 'Давление',
      value: '765 мм ртутного столба - нормальное',
    },
    {
      icon_id: 'precipitation',
      name: 'Осадки',
      value: 'Без осадков',
    },
    {
      icon_id: 'wind',
      name: 'Ветер',
      value: '3 м/с юго-запад - легкий ветер',
    },
]

  return (
    <div className='this_day_info'>
      <div className='this_day_info_items'>
        {items.map((item: Item) => (
          <ThisDayItem key={item.icon_id} item={item}/>
        ))}
      </div>
    </div>
  )
}

export default ThisDayInfo;
