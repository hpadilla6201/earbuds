import axios from "axios";

// eslint-disable-next-line
const USER_API_URL = "http://localhost:4000/users";
// eslint-disable-next-line
const BASE_API_URL = "http://localhost:4000";
const HEROKU_BASE_URL = "https://earbuds-node-server-app.herokuapp.com";
const HEROKU_USERS_URL = "https://earbuds-node-server-app.herokuapp.com/users";

const api = axios.create({
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export const findUserById = async (uid) => {
  const response = await api.get(`${HEROKU_USERS_URL}/${uid}`);
  const user = response.data;
  return user;
};

export const register = async (user) => {
  const response = await api.post(`${HEROKU_BASE_URL}/register`, user);
  const newUser = response.data;
  return newUser;
};

export const login = async (user) => {
  const response = await api.post(`${HEROKU_BASE_URL}/login`, user);
  return response.data;
};

export const logout = async () => {
  const response = await api.post(`${HEROKU_BASE_URL}/logout`);
  return response.data;
};
export const profile = async () => {
  const response = await api.post(`${HEROKU_BASE_URL}/profile`);
  return response.data;
};

export const findAllUsers = async () => {
  const response = await api.get(HEROKU_USERS_URL);
  return response.data;
};

export const createUser = () => {};

export const deleteUser = async (uid) => {
  const response = await api.delete(`${HEROKU_USERS_URL}/${uid}`);
  return response.data;
};

export const updateUser = async (user) => {
  try {
    console.log("BEFORE CALL");
    const response = await api.put(`${HEROKU_USERS_URL}/${user._id}`, {
      ...user,
    });
    console.log("in update user service", response);
    return response.data;
  } catch (e) {
    console.log("AN ERROR", e);
    throw e;
  }
};
