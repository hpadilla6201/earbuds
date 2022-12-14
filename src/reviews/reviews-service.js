import axios from "axios";

// eslint-disable-next-line
const REVIEW_API = "http://localhost:4000/api/reviews";
// eslint-disable-next-line
const ALBUM_REVIEWS_API = "http://localhost:4000/api/album";
// eslint-disable-next-line
const AUTHOR_REVIEWS_API = "http://localhost:4000/api/users";
// eslint-disable-next-line
const HEROKU_REVIEW_API =
  "https://earbuds-node-server-app.herokuapp.com/api/reviews";
// eslint-disable-next-line
const HEROKU_ALBUM_REVIEWS_API =
  "https://earbuds-node-server-app.herokuapp.com/api/album";
// eslint-disable-next-line
const HEROKU_AUTHOR_REVIEWS_API =
  "https://earbuds-node-server-app.herokuapp.com/api/users";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const createReview = async (review) => {
  const response = await api.post(HEROKU_REVIEW_API, review);
  return response.data;
};

export const findReviewsByAlbum = async (lastFMID) => {
  const response = await api.get(
    `${HEROKU_ALBUM_REVIEWS_API}/${lastFMID}/reviews`
  );
  return response.data;
};

export const findReviewsByAuthor = async (author) => {
  const response = await api.get(
    `${HEROKU_AUTHOR_REVIEWS_API}/${author}/reviews`
  );
  return response.data;
};

export const deleteReview = async (rid) => {
  const response = await axios.delete(`${HEROKU_REVIEW_API}/${rid}`);
  return response.data;
};
