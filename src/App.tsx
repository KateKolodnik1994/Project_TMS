import { memo } from 'react';
import react, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ThisDayWeather from './components/Main/thisDayWeather/thisDayWeather';
import FiveDaysWeather from './components/Main/upcomingWeather/upcomingWeather';
import { useCustomDispatch, useCustomSelector } from './hooks/store';
import { selectCurrentWeatherData, selectUpcomingWeatherData } from './store/selector';
import { fetchCurrentWeather } from './store/thunks/fetchCurrentWeather';
import { fetchUpcomingWeather } from './store/thunks/fetchDaysWeather';
import { Container } from '@mui/system';
import { Field, Form, Formik } from 'formik';
import { TbSearch } from 'react-icons/tb';

export function App() {

  const dispatch = useCustomDispatch();
  const { todayWeather } = useCustomSelector(
    selectCurrentWeatherData
  );

  const { upcomingWeather } = useCustomSelector(
    selectUpcomingWeatherData
  );

  return (
    <BrowserRouter>
    <Container>
      <div className='main_container'>
      <div className='title'> Weather APP </div>
    <div className='text'> Enter Your Location: </div>
    <Formik
                initialValues={{
                    location: ''
                }}
                onSubmit={(values) => {
                    dispatch(fetchCurrentWeather(values.location));
                    console.log(values.location)
                    dispatch(fetchUpcomingWeather(values.location));
                    console.log(values.location)
                }}
              >
                <Form className='search-bar' noValidate>
                  <div className='search_wrapper'>
                  <label htmlFor="location"></label>
                    <Field id="location" name="location" placeholder='City' />
                    <button type="submit" className='s-icon' > <TbSearch />  </button>
                  </div>
                </Form>
</Formik>
    <div className='wrapper_dayWeather'>
      <ThisDayWeather todayWeather={todayWeather} />
    </div>
    <div className='wrapper_fewDaysWeather'>
      {/* <Days /> */}
      <FiveDaysWeather upcomingWeather={upcomingWeather} />
    </div>
      </div>
    </Container>
    </BrowserRouter>
  );
}

export default memo(App);
