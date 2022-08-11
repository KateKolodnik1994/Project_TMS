import { WeatherService } from "../../cervices/WeatherService";
import { CurrentWeatherSlice } from "../slices/CurrentWeatherSlice";
import { AppDispatch } from "../store";

export const fetchCurrentWeather =
  (payload: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(CurrentWeatherSlice.actions.fetchCurrentWeather());
      const res = await WeatherService.getCurrentWeather(payload);
      console.log(res)
      if (res.status === 200) {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherSuccess(res));
      } else {
        dispatch(CurrentWeatherSlice.actions.fetchCurrentWeatherError(res));
      }
    } catch (error) {
      console.log(error);
    }
  };
