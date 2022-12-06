import axios from "axios";
const ALBUM_API_URL = "http://localhost:4000/albums";

export const createAlbum = async (newAlbum) => {
  const response = await axios.post(ALBUM_API_URL, newAlbum);
  const actualAlbum = response.data;
  return actualAlbum;
};
export const findAllAlbums = async () => {
  const response = await axios.get(ALBUM_API_URL);
  const album = response.data;
  return album;
};
export const updateAlbum = async () => {};

export const deleteAlbum = async (aid) => {
  const response = await axios.delete(`${ALBUM_API_URL}/${aid}`);
  // eslint-disable-next-line
  const status = response.data;
  return aid;
};
