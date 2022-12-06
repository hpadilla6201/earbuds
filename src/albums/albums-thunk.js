import { createAsyncThunk } from "@reduxjs/toolkit";
import { createAlbum, deleteAlbum, findAllAlbums } from "./albums-service";

export const createAlbumsThunk = createAsyncThunk("createAlbum", (newAlbum) =>
  createAlbum(newAlbum)
);

export const findAllAlbumsThunk = createAsyncThunk("findAllAlbums", () =>
  findAllAlbums()
);

export const updateAlbumThunk = {};

export const deleteAlbumThunk = createAsyncThunk("deleteAlbum", (aid) =>
  deleteAlbum(aid)
);
