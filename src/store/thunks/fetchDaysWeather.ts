import { DaysWeatherService } from "../../cervices/DaysWeatherService";
import { UpcomingWeatherSlice } from "../slices/FiveDaysWethaerSlice";
import { AppDispatch } from "../store";

export const fetchUpcomingWeather =
  (payload: any) => async (dispatch: AppDispatch) => {
    try {
      dispatch(UpcomingWeatherSlice.actions.fetchUpcomingWeather());
      const result = await DaysWeatherService.getUpcomingWeather(payload);
      console.log(result)
      if (result.status === 200) {
        dispatch(UpcomingWeatherSlice.actions.fetchUpcomingWeatherSuccess(result));
      } else {
        dispatch(UpcomingWeatherSlice.actions.fetchUpcomingWeatherError(result));
      }
    } catch (error) {
      console.log(error);
    }
  };

