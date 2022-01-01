import axios from "axios";
import {
  createSlice,
  createAsyncThunk,
  createSelector,
} from "@reduxjs/toolkit";

export const getNews = createAsyncThunk("getNews/newsFetched", async () => {
  const response = await axios.get(
    "https://newsapi.org/v2/top-headlines?country=us&apiKey=60adc178fb614400a4fd9d2552def664"
  );
  console.log(response.data.articles);
  return response.data;
});
const newsSlice = createSlice({
  name: "news",
  initialState: {
    news: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state, action) => {
        state.isLoading = true;
      })
      .addCase(getNews.fulfilled, (state, action) => {
        // var tempEntities = {}
        // tempEntities = action.payload.articles
        // state.news = tempEntities
        state.news = action.payload.articles;
        state.isLoading = false;
      });
  },
});
const newsReducer = newsSlice.reducer;

const selectNews = (state) => state.newsReducer.news;

export const newsSelector = createSelector(selectNews, (news) =>
  Object.values(news)
);

export default newsReducer;
