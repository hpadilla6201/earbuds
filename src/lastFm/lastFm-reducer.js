import { createSlice } from "@reduxjs/toolkit";
// import { v4 as uuidv4 } from "uuid";
import {
  findAlbumBySearchTermThunk,
  getTopHipHopAlbumsThunk,
  getTopTracksThunk,
  getTopRapAlbumsThunk,
  getTopRnbAlbumsThunk,
  getTopPopAlbumsThunk,
  getTopArtistsThunk,
  getAristsTopAlbumsThunk,
  findAlbumByIdThunk,
} from "./lastFm-thunks";

const lastFmSlice = createSlice({
  name: "lastFm",
  initialState: {
    albumBySearchTerm: [],
    topHipHopAlbums: [],
    topArtists: [],
    topTracks: [],
    topRapAlbums: [],
    topRnbAlbums: [],
    topPopAlbums: [],
    aristsTopAlbums: [],
    albumById: [],
    searchTermAlbumDetail: {},
  },
  reducers: {
    getAlbumSearchTermbyId(state, action) {
      state.searchTermAlbumDetail = state.albumBySearchTerm.find(
        (a) => a._id === action.payload
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(findAlbumBySearchTermThunk.fulfilled, (state, action) => {
      //   state.albumBySearchTerm = (action.payload.albummatches.album || []).map(
      //     (a) => ({ _id: uuidv4(), ...a })
      //   );
      state.albumBySearchTerm = action.payload || [];
      return state;
    });

    builder.addCase(findAlbumByIdThunk.fulfilled, (state, action) => {
      state.albumById = action.payload[0] || [];
      return state;
    });

    builder.addCase(getTopTracksThunk.fulfilled, (state, action) => {
      state.topTracks = action.payload.track || [];
      return state;
    });

    builder.addCase(getTopHipHopAlbumsThunk.fulfilled, (state, action) => {
      state.topHipHopAlbums = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopRapAlbumsThunk.fulfilled, (state, action) => {
      state.topRapAlbums = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopRnbAlbumsThunk.fulfilled, (state, action) => {
      state.topRnbAlbums = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopPopAlbumsThunk.fulfilled, (state, action) => {
      state.topPopAlbums = action.payload.album || [];
      return state;
    });

    builder.addCase(getTopArtistsThunk.fulfilled, (state, action) => {
      state.topArtists = action.payload.artist || [];
      return state;
    });

    builder.addCase(getAristsTopAlbumsThunk.fulfilled, (state, action) => {
      state = action.payload.artist || [];
      return state;
    });
  },
});

export const { getAlbumSearchTermbyId } = lastFmSlice.actions;
export default lastFmSlice.reducer;
