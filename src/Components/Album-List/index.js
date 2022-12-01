import React, { useEffect } from "react";
import AlbumItem from "./album-item";
import {useDispatch, useSelector} from 'react-redux'
import { findAllAlbumsThunk } from "../../services/album-thunk";
const AlbumList = () => {
    const albumArray = useSelector(state => state.albums)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(findAllAlbumsThunk())
    }, [dispatch])
    return(
        <ul className="list-group-horizontal">
        {
            albumArray.map(album =>
                <AlbumItem 
                    key={album._id} album={album} /> )
        }
        </ul>
        
    );
};
export default AlbumList;
