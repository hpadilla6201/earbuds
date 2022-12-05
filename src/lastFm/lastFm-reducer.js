import {createSlice} from "@reduxjs/toolkit";
import { findAlbumBySearchTermThunk, getTopTracksThunk } from "./lastFm-thunks";

const lastFmSlice = createSlice({
    name: 'lastFm',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(findAlbumBySearchTermThunk.fulfilled, (state, action) => {
            state = action.payload.albummatches.album || []
            return state
        })

        builder.addCase(getTopTracksThunk.fulfilled, (state, action) => {
         
            state = action.payload.track || []
            return state
        })
    }
});

export default lastFmSlice.reducer