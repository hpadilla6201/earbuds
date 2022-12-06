import { createSlice } from "@reduxjs/toolkit";
import {
  findAlbumBySearchTermThunk,
  getTopHipHopAlbumsThunk,
  getTopTracksThunk,
  getTopRapAlbumsThunk,
  getTopRnbAlbumsThunk,
  getTopPopAlbumsThunk,
  getTopAristsThunk,
  getAristsTopAlbumsThunk,
} from "./lastFm-thunks";

const lastFmSlice = createSlice({
  name: "lastFm",
  initialState: [],
  extraReducers: (builder) => {
    builder.addCase(findAlbumBySearchTermThunk.fulfilled, (state, action) => {
      state = action.payload.albummatches.album || [];
      return state;
    });

    builder.addCase(getTopTracksThunk.fulfilled, (state, action) => {
      state = action.payload.track || [];
      return state;
    });

    builder.addCase(getTopHipHopAlbumsThunk.fulfilled, (state, action) => {
      state = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopRapAlbumsThunk.fulfilled, (state, action) => {
      state = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopRnbAlbumsThunk.fulfilled, (state, action) => {
      state = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopPopAlbumsThunk.fulfilled, (state, action) => {
      state = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopAristsThunk.fulfilled, (state, action) => {
      state = action.payload.artist || [];
      return state;
    });

    builder.addCase(getAristsTopAlbumsThunk.fulfilled, (state, action) => {
      state = action.payload.artist || [];
      return state;
    });
  },
});

export default lastFmSlice.reducer;
