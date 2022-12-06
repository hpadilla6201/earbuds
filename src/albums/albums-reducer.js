import { createSlice } from "@reduxjs/toolkit";
import {
  createAlbumsThunk,
  deleteAlbumThunk,
  findAllAlbumsThunk,
} from "./albums-thunk";

const initialState = {
  albums: [],
  loading: true,
};

const albumsReducer = createSlice({
  name: "albums",
  initialState: initialState,
  extraReducers: {
    [findAllAlbumsThunk.fulfilled]: (state, action) => {
      state.albums = action.payload;
    },
    [createAlbumsThunk.fulfilled]: (state, action) => {
      state.albums.push(action.payload);
    },
    [deleteAlbumThunk.fulfilled]: (state, action) => {
      state.albums = state.albums.filter((m) => {
        return m._id !== action.payload;
      });
    },
  },
});

export default albumsReducer.reducer;
