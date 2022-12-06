import axios from "axios";

const USERS_URL = "http://localhost:4000/users";
// eslint-disable-next-line
const LIKES_URL = "http://localhost:4000/users/:uid/likes/:aid";

export const userLikesAlbum = async (uid, aid) => {
  const response = await axios.post(`${USERS_URL}/${uid}/likes/${aid}`);
  return response.data;
};
