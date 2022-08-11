import React from 'react';
import { IndicatorSvgSelector } from '../../../assets/images/icons/iconsSvgSelector';
import './thisDayInfo.css';
import { Item } from './thisDayInfo';

interface Props {
    item: Item;
  }

export const ThisDayItem = ({ item }: Props) => {
    const { icon_id, name, value } = item;
    return (
        <div className = 'item'>
          <div className = 'indicator'>
            <IndicatorSvgSelector id = {icon_id} />
          </div>
          <div className = 'indicator__name'>{name}</div>
          <div className='indicator__value'>{value}</div>
        </div>
      );
}
