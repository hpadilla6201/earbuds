import React from "react";
import { Link } from "react-router-dom";

const HipHopAlbumsResults = ({ albumArray }) => {
  return (
    <>
      <h1>Top Hip Albums</h1>
      <div className="list-group">
        {albumArray.map((album, index) => (
          <div className="list-group-item" key={index}>
            <h2>{album.name}</h2>
            <Link to="">
              <img src={album.image[2]["#text"]} alt="" />
            </Link>

            <h2>By: {album.artist.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default HipHopAlbumsResults;
