import React from "react";
const ArtistItem = (artist) => {
    return(
        <li className="list-group-item">
            <img width={70} src={album.image} alt=""/>
            <div className="row">
                {album.name} - {album.artist}
                <span>{album.rating}</span>
            </div>
        </li>
    );
}
export default ArtistItem;