import {createAsyncThunk} from "@reduxjs/toolkit";
import { findAlbumBySearchTerm } from "./lastFm-service"; 
import { getTopTracks } from "./lastFm-service";

export const findAlbumBySearchTermThunk = createAsyncThunk(
    'findAlbumBySearchTerm',
    async (term) => await findAlbumBySearchTerm(term)
)

export const getTopTracksThunk = createAsyncThunk(
    'getTopTracks',
    async () => await getTopTracks()
)