import { memo } from 'react';
import react, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import axios from 'axios';
import Days from './components/Main/daysWeather/Days';
import ThisDayWeather from './components/Main/thisDayWeather/thisDayWeather';
import ThisDayInfo from './components/Main/thisDayInfo/thisDayInfo';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { selectCurrentWeatherData } from './store/selector';
import { fetchCurrentWeather } from './store/thunks/fetchCurrentWeather';
import { Container } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { TbMapSearch, TbSearch } from 'react-icons/tb';


export function App() {

  const dispatch = useCustomDispatch();
  const { weather } = useCustomSelector(
    selectCurrentWeatherData
  );
  // useEffect(() => {
  //   dispatch(fetchCurrentWeather('paris'));
  // }, []);


  return (
    <BrowserRouter>
    <Container>
    <div className='wrapper_header'>
      <Header />
    </div>
    <div> Ваше местоположение: </div>
    <Formik
                initialValues={{
                    location: ''
                }}
                onSubmit={(values) => {
                    dispatch(fetchCurrentWeather(values.location));
                    console.log(values.location)
                }}
              >
                <Form className='search-bar' noValidate>
                    <label htmlFor="location"></label>
                    <Field id="location" name="location" placeholder='#Explore?' />
                    <button type="submit" className='s-icon' > <TbSearch />  </button>
                </Form>
</Formik>
    <div className='wrapper_dayWeather'>
      <ThisDayWeather weather={weather} />
      <ThisDayInfo weather={weather} />
    </div>
    <div className='wrapper_fewDaysWeather'>
      <Days />
    </div>
    </Container>
    </BrowserRouter>
  );
}

export default memo(App);
