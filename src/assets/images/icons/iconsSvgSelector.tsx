import React from 'react';
import { UrlWithStringQuery } from 'url';
import './icons.css'

interface Props {
  icon: string;
}

export const GlobalSvgSelector = ({ icon }: Props) => {
  switch (icon) {
    case '01n' :
      return (
        <img src='https://img.icons8.com/stickers/100/000000/partly-cloudy-day.png' alt=''></img>
      );
    
    case '01d' :
      return (
        <img src='https://img.icons8.com/stickers/100/000000/partly-cloudy-day.png' alt=''></img>
      );

    case '02d' :
      return (
        <img src='http://openweathermap.org/img/wn/02d@2x.png' alt=''></img>
      );

    case '02n' :
        return (
          <img src='http://openweathermap.org/img/wn/02n@2x.png' alt=''></img>
      );
    case '03d' :
        return (
          <img src='http://openweathermap.org/img/wn/03d@2x.png' alt=''></img>
      );

    case '03n' :
        return (
          <img src='http://openweathermap.org/img/wn/03n@2x.png' alt=''></img>
      );

    case '04n' :
      return (
        <img src='http://openweathermap.org/img/wn/04n@2x.png' alt=''></img>
      );
    case '04d' :
        return (
          <img src='http://openweathermap.org/img/wn/04d@2x.png' alt=''></img>
      );      
    case '09d':
      return (
        <img src='http://openweathermap.org/img/wn/09d@2x.png' alt=''></img>
      );
    case '50d' :
      return (
        <img src='http://openweathermap.org/img/wn/50d@2x.png' alt=''></img>
      );
    case '13d' :
      return (
        <img src='http://openweathermap.org/img/wn/13d@2x.png' alt=''></img>
      );

    case '10d' :
      return (
        <img src='' alt=''></img>
      );

    case '11d' :
        return (
          <img src='http://openweathermap.org/img/wn/11d@2x.png' alt=''></img>
      );
    default:
      return null;
  }
};
