import { configureStore } from "@reduxjs/toolkit";
import weatherReducer  from "./reducer/weatherSlice";
import newsReducer from "./reducer/newsSlice";
export const store = configureStore({
  reducer: {
    weatherReducer,
    newsReducer
  },
});
