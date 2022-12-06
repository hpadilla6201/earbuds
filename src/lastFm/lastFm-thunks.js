import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  findAlbumBySearchTerm,
  getAristsTopAlbums,
  getTopArists,
  getTopHipHopAlbums,
  getTopPopAlbums,
  getTopRapAlbums,
  getTopRnbAlbums,
} from "./lastFm-service";
import { getTopTracks } from "./lastFm-service";

export const findAlbumBySearchTermThunk = createAsyncThunk(
  "findAlbumBySearchTerm",
  async (term) => await findAlbumBySearchTerm(term)
);

export const getTopTracksThunk = createAsyncThunk(
  "getTopTracks",
  async () => await getTopTracks()
);

export const getTopHipHopAlbumsThunk = createAsyncThunk(
  "getTopHipHopAlbums",
  async () => await getTopHipHopAlbums()
);

export const getTopRapAlbumsThunk = createAsyncThunk(
  "getTopRapAlbums",
  async () => await getTopRapAlbums()
);

export const getTopRnbAlbumsThunk = createAsyncThunk(
  "getTopRnbAlbums",
  async () => await getTopRnbAlbums()
);

export const getTopPopAlbumsThunk = createAsyncThunk(
  "getTopPopAlbums",
  async () => await getTopPopAlbums()
);

export const getTopAristsThunk = createAsyncThunk(
  "getTopArtists",
  async () => await getTopArists()
);

export const getAristsTopAlbumsThunk = createAsyncThunk(
  "getAristsTopAlbums",
  async (artist) => await getAristsTopAlbums(artist)
);
