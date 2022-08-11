import { AxiosResponse } from "axios";
import { Today_weather } from "../store/types/types";
import api from '../axios';


export class WeatherService {
    static getCurrentWeather(city: any): Promise<AxiosResponse<Today_weather>> {
      return api.get<Today_weather>(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=04ba501f9a69c1ea21d90adce55ae293`);
    }
}

export default WeatherService;
