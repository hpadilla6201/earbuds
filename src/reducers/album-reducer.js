import { createSlice } from "@reduxjs/toolkit";
import { findAllAlbumsThunk } from "../services/album-thunk";

const albumSlice = createSlice({
 name: 'albums',
 initialState: [],
 extraReducers: (builder) => {
    builder.addCase(findAllAlbumsThunk.fulfilled, (state, action) => {
         state = action.payload
         //console.log(state)
         return state
    })
}
});

export default albumSlice.reducer;