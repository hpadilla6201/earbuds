import { createSlice } from "@reduxjs/toolkit";
import {
  createReviewThunk,
  findReviewsByAuthorThunk,
  findReviewsByAlbumThunk,
} from "./reviews-thunk";

const reviewsReducer = createSlice({
  name: "reviews",
  initialState: {
    reviews: [],
    reviewsByAlbum: [],
  },
  extraReducers: {
    [createReviewThunk.fulfilled]: (state, action) => {
      state.reviews.push(action.payload);
    },
    [findReviewsByAlbumThunk.fulfilled]: (state, action) => {
      console.log(action.payload);
      state.reviewsByAlbum = action.payload || [];
    },
    [findReviewsByAuthorThunk.fulfilled]: (state, action) => {
      state.reviews = action.payload;
    },
  },
});

export default reviewsReducer.reducer;
