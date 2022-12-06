import { createAsyncThunk } from "@reduxjs/toolkit";
import { userLikesAlbum } from "./likes-service";

export const userLikesAlbumThunk = createAsyncThunk(
  "userLikesAlbum",
  async (like) => {
    return await userLikesAlbum(like.uid, like.aid);
  }
);
