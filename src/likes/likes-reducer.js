import { createSlice } from "@reduxjs/toolkit";
import { userLikesAlbumThunk } from "./likes-thunk";

const initialState = {
  likes: [],
  loading: false,
};

export const likesReducer = createSlice({
  name: "likes",
  initialState,
  extraReducers: {
    [userLikesAlbumThunk.fulfilled]: (state, action) => {
      state.likes.push(action.payload);
    },
  },
});
