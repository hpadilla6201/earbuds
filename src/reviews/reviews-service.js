import axios from "axios";

// eslint-disable-next-line
const REVIEW_API = "http://localhost:4000/api/reviews";
// eslint-disable-next-line
const ALBUM_REVIEWS_API = "http://localhost:4000/api/album";
// eslint-disable-next-line
const AUTHOR_REVIEWS_API = "http://localhost:4000/api/users";

const HEROKU_REVIEW_API =
  "https://earbuds-node-server-app.herokuapp.com/api/reviews";
const HEROKU_ALBUM_REVIEWS_API =
  "https://earbuds-node-server-app.herokuapp.com/api/album";
const HEROKU_AUTHOR_REVIEWS_API =
  "https://earbuds-node-server-app.herokuapp.com/api/users";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://meek-kataifi-fda3e7.netlify.app",
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
