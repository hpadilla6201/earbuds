import { createAsyncThunk } from "@reduxjs/toolkit";
import { findAllAlbums } from "./album-service";

export const findAllAlbumsThunk = createAsyncThunk(
    'findAllAlbums',
    async () => await findAllAlbums()
    );
