import axios, { AxiosResponse } from "axios";
import { Upcoming_weather } from "../store/types/types";

export class DaysWeatherService {
  static getUpcomingWeather(city: any): Promise<AxiosResponse<Upcoming_weather>> {
    return axios.get<Upcoming_weather>(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=04ba501f9a69c1ea21d90adce55ae293&cnt=5`);
  }
}

export default DaysWeatherService;
