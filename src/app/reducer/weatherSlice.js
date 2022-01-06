import axios from "axios";
const {
  createSlice,
  createAsyncThunk,
} = require("@reduxjs/toolkit");

export const getWeather = createAsyncThunk(
  "weather/weatherFetched",
  async (location) => {
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${location.q}&appid=98ea538d118721f5330fce1c4de1a6fb&units=metric`
    )
    //console.log(response.data)
    return response.data;
  }
);  
export const getForecast = createAsyncThunk(
  "weather/weatherForecastFetched",
  async (location) => {
    var options = {
      method: "GET",
      url: "https://community-open-weather-map.p.rapidapi.com/forecast/daily",
      params: {
        q: location.q,
        lat: location.lat,
        lon: location.lon,
        cnt: "7",
        units: "metric",
      },
      headers: {
        "x-rapidapi-host": "community-open-weather-map.p.rapidapi.com",
        "x-rapidapi-key": "a15d7fb712mshec8ee4768353c9bp136f3djsnadc1c1efe91b",
      },
    };
    const response = await axios.request(options);
    return response.data;
  }
);
const weatherSlice = createSlice({
  name: "weather",
  initialState: {
    weather: {},
    forecast: {},
    isLoading: true,
    foreLoading: true,
    data: {
      q: "Phan Rang-Thap Cham",
      lon: "",
      lat: "",
    },
  },
  reducers: {
    locationAdded(state, action) {
      state.data.q = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getWeather.fulfilled, (state, action) => {
        const newEntities = action.payload;
        state.weather = newEntities;
        // console.log(action.payload)
        state.isLoading = false;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getForecast.pending, (state, action) => {
        state.foreLoading = true;
      })
      .addCase(getForecast.fulfilled, (state, action) => {
        const newEntities = action.payload.list;
        // action.payload.list.forEach((date) => {
        //   newEntities[date.dt] = date;
        // });
        state.forecast = newEntities;
        state.foreLoading = false;
      });
  },
});
const weatherReducer = weatherSlice.reducer;

//selector
export const weatherSelector = (state) => state.weatherReducer.weather;
export const selectForecastDate = (state) => state.weatherReducer.forecast;

export const { locationAdded } = weatherSlice.actions;
//export
export default weatherReducer;
