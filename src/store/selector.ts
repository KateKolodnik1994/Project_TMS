import { RootState } from './store';

export const selectCurrentWeatherData = (state: RootState) =>
  state.currentWeatherSliceReducer;

export const selectUpcomingWeatherData = (state: RootState) =>
  state.upcomingWeatherSliceReducer;
