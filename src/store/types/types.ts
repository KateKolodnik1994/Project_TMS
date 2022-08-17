export type Today_weather = {
    main: {};
    name: any;
    dt_txt: string;
    weather: [{
      main: string;
      icon: string;
    }];
  }
  
export type Upcoming_weather = {
  city: {
    country: string,
    name: string,
  },
  list: [{
    dt_txt: string,
    main: {
      temp: number,
      feels_like: number,
      humidity: number,
    },
    weather: [{
      main: string,
      icon: string,
    }];
    wind: {
      speed: number,
    }
  }]
  };
