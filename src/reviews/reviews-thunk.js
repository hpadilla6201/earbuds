import { createAsyncThunk } from "@reduxjs/toolkit";
import * as service from "./reviews-service";

export const createReviewThunk = createAsyncThunk(
  "createReview",
  async (review) => service.createReview(review)
);
export const findReviewsByAlbumThunk = createAsyncThunk(
  "findReviewsByAlbum",
  async (lastFmID) => service.findReviewsByAlbum(lastFmID)
);
export const findReviewsByAuthorThunk = createAsyncThunk(
  "findReviewsByAuthor",
  async (author) => service.findReviewsByAuthor(author)
);

export const deleteReviewThunk = createAsyncThunk(
  "reviews/deleteReviews",
  async (reviewId) => {
    await service.deleteReview(reviewId);
    return reviewId;
  }
);
