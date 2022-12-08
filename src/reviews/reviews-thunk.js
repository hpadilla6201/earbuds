import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  createReview,
  findReviewsByAuthor,
  findReviewsByAlbum,
} from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
  "createReview",
  async (review) => createReview(review)
);
export const findReviewsByAlbumThunk = createAsyncThunk(
  "findReviewsByAlbum",
  async (lastFmID) => findReviewsByAlbum(lastFmID)
);
export const findReviewsByAuthorThunk = createAsyncThunk(
  "findReviewsByAuthor",
  async (author) => findReviewsByAuthor(author)
);
