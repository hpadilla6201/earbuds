import axios from "axios";

const SEARCH_URL =
  "http://ws.audioscrobbler.com//2.0/?method=album.search&album=";
const TOP_TRACK_URL =
  "http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=246223df2a4884151a27c46913971f61&format=json";
const API_KEY = "&api_key=246223df2a4884151a27c46913971f61&format=json";

const HIP_HOP_URL =
  "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=Hip-Hop&api_key=246223df2a4884151a27c46913971f61&format=json";

const RAP_URL =
  "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rap&api_key=246223df2a4884151a27c46913971f61&format=json";

const RNB_URL =
  "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=rnb&api_key=246223df2a4884151a27c46913971f61&format=json";

const POP_URL =
  "http://ws.audioscrobbler.com/2.0/?method=tag.gettopalbums&tag=pop&api_key=246223df2a4884151a27c46913971f61&format=json";

const TOP_ARTIST_URL =
  "http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=246223df2a4884151a27c46913971f61&format=json";

const TOP_ARISTS_ALBUMS_URL =
  "http://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&artist=";

export const findAlbumBySearchTerm = async (term) => {
  const response = await axios.get(`${SEARCH_URL}${term}${API_KEY}`);
  return response.data.results;
};

export const getTopTracks = async () => {
  const response = await axios.get(`${TOP_TRACK_URL}`);
  return response.data.tracks;
};

export const getTopHipHopAlbums = async () => {
  const response = await axios.get(`${HIP_HOP_URL}`);
  return response.data.albums;
};

export const getTopRapAlbums = async () => {
  const response = await axios.get(`${RAP_URL}`);
  return response.data.albums;
};

export const getTopRnbAlbums = async () => {
  const response = await axios.get(`${RNB_URL}`);
  return response.data.albums;
};

export const getTopPopAlbums = async () => {
  const response = await axios.get(`${POP_URL}`);
  return response.data.albums;
};

export const getTopArtists = async () => {
  const response = await axios.get(`${TOP_ARTIST_URL}`);
  return response.data.artists;
};

export const getAristsTopAlbums = async (artist) => {
  const response = await axios.get(
    `${TOP_ARISTS_ALBUMS_URL}${artist}${API_KEY}`
  );
  return response.data.topalbums;
};
