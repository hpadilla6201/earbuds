import React from "react";
import AlbumItem from "./album-item";
import {useSelector} from 'react-redux'
const AlbumList = () => {
    const albumArray = useSelector(state => state.album)
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
