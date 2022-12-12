import axios from "axios";
// eslint-disable-next-line
const FOLLOWS_API = "http://localhost:4000/follows";
// eslint-disable-next-line
const USERS_API = "http://localhost:4000/users";

const HEROKU_FOLLOWS_API =
  "https://earbuds-node-server-app.herokuapp.com/follows";
const HEROKU_USERS_API = "https://earbuds-node-server-app.herokuapp.com/users";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "https://meek-kataifi-fda3e7.netlify.app",
  },
});

export const followUser = async (follow) => {
  const response = await api.post(`${HEROKU_FOLLOWS_API}`, follow);
  return response.data;
};

export const findFollowers = async (followed) => {
  const response = await api.get(`${HEROKU_USERS_API}/${followed}/followers`);
  return response.data;
};

export const findFollowing = async (follower) => {
  const response = await api.get(`${HEROKU_USERS_API}/${follower}/following`);
  return response.data;
};
