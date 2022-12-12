import axios from "axios";

const REVIEW_API = "http://localhost:4000/api/reviews";
const ALBUM_REVIEWS_API = "http://localhost:4000/api/album";
const AUTHOR_REVIEWS_API = "http://localhost:4000/api/users";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const createReview = async (review) => {
  const response = await api.post(REVIEW_API, review);
  return response.data;
};

export const findReviewsByAlbum = async (lastFMID) => {
  const response = await api.get(`${ALBUM_REVIEWS_API}/${lastFMID}/reviews`);
  return response.data;
};

export const findReviewsByAuthor = async (author) => {
  const response = await api.get(`${AUTHOR_REVIEWS_API}/${author}/reviews`);
  return response.data;
};
