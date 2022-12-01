import axios from "axios"
const album_URL = 'http://localhost:4000/albums'

export const findAllAlbums = async () => {
    const response = await axios.get(album_URL)
    const albums = response.data
    //console.log(response)
    return albums;

}

export const createAlbum = () => {

}

export const deleteAlbum = () => {

}

export const updateAlbum = () => {

}