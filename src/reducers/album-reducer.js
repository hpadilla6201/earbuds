import { createSlice } from "@reduxjs/toolkit";
import album from "../Components/Album-List/album.json";


   
const albumSlice = createSlice({
 name: 'album',
 initialState: album,
});

export default albumSlice.reducer;