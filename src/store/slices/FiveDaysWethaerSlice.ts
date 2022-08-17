import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Upcoming_weather } from "../types/types";

// let UpcomingWeather: any; 

type UpcomingWeather = {
    upcomingWeather: Upcoming_weather;
    isLoading: boolean;
    response: any;
  };

type Response = {
    status: number;
    message: string;
};

const initialState: UpcomingWeather = {
  upcomingWeather: {
      city: {
        country: '',
        name: '',
      },
      list: [{
        dt_txt: '',
        main: {
          temp: 0,
          feels_like: 0,
          humidity: 0,
        },
        weather: [{
          main: '',
          icon: '',
        }],
        wind: {
          speed: 0,
        }
      }]
      },
    isLoading: false,
    response: {},
  };
  
export const UpcomingWeatherSlice = createSlice({
    name: 'upcoming_weather',
    initialState,
    reducers: {
      fetchUpcomingWeather(state) {
        state.isLoading = true;
      },
      fetchUpcomingWeatherSuccess(
        state,
        action: PayloadAction<AxiosResponse<Upcoming_weather>>
      ) {
        state.isLoading = false;
        state.upcomingWeather = action.payload.data;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
        };
      },
      fetchUpcomingWeatherError(
        state,
        action: PayloadAction<AxiosResponse<Upcoming_weather>>
      ) {
        state.isLoading = false;
        state.response = {
          status: action.payload.status,
          message: action.payload.statusText,
        };
      },
    },
  });
  
  export default UpcomingWeatherSlice.reducer;
