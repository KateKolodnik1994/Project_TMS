import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AxiosResponse } from "axios";
import { Today_weather } from "../types/types";

type CurrentWeather = {
  todayWeather: Today_weather;
  isLoading: boolean;
  response: Response;
};

type Response = {
  status: number;
  message: string;
};

const initialState: CurrentWeather = {
  todayWeather: {
    main: {
      temp: 0,
      feels_like: 0,
    },
    name: '',
    dt_txt: '',
    weather: [{
      main: '',
      icon: '',
    }],
  },
  isLoading: false,
  response: {
    status: 0,
    message: '',
  },

};

export const CurrentWeatherSlice = createSlice({
  name: 'current_weather',
  initialState,
  reducers: {
    fetchCurrentWeather(state) {
      state.isLoading = true;
    },
    fetchCurrentWeatherSuccess(
      state,
      action: PayloadAction<AxiosResponse<Today_weather>>
    ) {
      state.isLoading = false;
      state.todayWeather = action.payload.data;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
    fetchCurrentWeatherError(
      state,
      action: PayloadAction<AxiosResponse<Today_weather>>
    ) {
      state.isLoading = false;
      state.response = {
        status: action.payload.status,
        message: action.payload.statusText,
      };
    },
  },
});

export default CurrentWeatherSlice.reducer;
