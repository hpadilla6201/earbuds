import axios from "axios";

// eslint-disable-next-line
const api = axios.create({
  withCredentials: false,
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

const ITUNES_SEARCH_URL = "https://itunes.apple.com/search?entity=album&term=";

const SEARCH_URL =
  "https://ws.audioscrobbler.com//2.0/?method=album.search&album=";
const TOP_TRACK_URL =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=246223df2a4884151a27c46913971f61&format=json";
const API_KEY = "&api_key=246223df2a4884151a27c46913971f61&format=json";

const HIP_HOP_URL =
  "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=Hip-Hop&api_key=246223df2a4884151a27c46913971f61&format=json";

const RAP_URL =
  "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rap&api_key=246223df2a4884151a27c46913971f61&format=json";

const RNB_URL =
  "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rnb&api_key=246223df2a4884151a27c46913971f61&format=json";

const POP_URL =
  "https://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=246223df2a4884151a27c46913971f61&format=json";

const TOP_ARTIST_URL =
  "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=246223df2a4884151a27c46913971f61&format=json";

const TOP_ARISTS_ALBUMS_URL =
  "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=";

const ID_URL = "https://itunes.apple.com/search?entity=album&term=";

export const findAlbumBySearchTerm = async (term) => {
  // const response = await axios.get(`${SEARCH_URL}${term}${API_KEY}`);
  const response = await api.get(`${ITUNES_SEARCH_URL}${term}`);
  return response.data.results;
};

export const findAlbumById = async (aid) => {
  const response = await api.get(`${ID_URL}${aid}`);
  return response.data.results;
};

export const getTopTracks = async () => {
  const response = await api.get(`${TOP_TRACK_URL}`);
  return response.data.tracks;
};

export const getTopHipHopAlbums = async () => {
  const response = await api.get(`${HIP_HOP_URL}`);
  return response.data.albums;
};

export const getTopRapAlbums = async () => {
  const response = await api.get(`${RAP_URL}`);
  return response.data.albums;
};

export const getTopRnbAlbums = async () => {
  const response = await api.get(`${RNB_URL}`);
  return response.data.albums;
};

export const getTopPopAlbums = async () => {
  const response = await api.get(`${POP_URL}`);
  return response.data.albums;
};

export const getTopArtists = async () => {
  const response = await api.get(`${TOP_ARTIST_URL}`);
  return response.data.artists;
};

export const getAristsTopAlbums = async (artist) => {
  const response = await api.get(`${TOP_ARISTS_ALBUMS_URL}${artist}${API_KEY}`);
  return response.data.topalbums;
};

export const findAlbumByLastId = async (imdbID) => {
  const response = await api.get(`${SEARCH_URL}${imdbID}`);
  return response.data;
};
