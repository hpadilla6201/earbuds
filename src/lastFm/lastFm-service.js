import axios from "axios";

const SEARCH_URL = 'http://ws.audioscrobbler.com//2.0/?method=album.search&album='
const TOP_TRACK_URL = 'http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=246223df2a4884151a27c46913971f61&format=json'
const API_KEY = '&api_key=246223df2a4884151a27c46913971f61&format=json'


export const findAlbumBySearchTerm = async (term) => {
    const response = await axios.get(`${SEARCH_URL}${term}${API_KEY}`)
    console.log(response.data.results)
    return response.data.results;
}

export const getTopTracks = async () => {
    const response = await axios.get(`${TOP_TRACK_URL}`)
    return response.data.Search;
}




