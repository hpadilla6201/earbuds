import {createSlice} from "@reduxjs/toolkit";
import { findAlbumBySearchTermThunk } from "./lastFm-thunks";

const lastFmSlice = createSlice({
    name: 'lastFm',
    initialState: [],
    extraReducers: (builder) => {
        builder.addCase(findAlbumBySearchTermThunk.fulfilled, (state, action) => {
            console.log(action.payload)
            state = action.payload.albummatches.album || []
            return state
        })
    }
});

export default lastFmSlice.reducer