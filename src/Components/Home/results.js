import React from "react";
// import ArtistTopAlbumsResults from "../ArtistTopAlbums/results";
// import { useSelector } from "react-redux";

const HomePageResults = ({ artistArray }) => {
  //   const artistAlbumsArray = useSelector(
  //     (state) => state.lastFm.aristsTopAlbums
  //   );
  return (
    <>
      <h1>Top Artists</h1>
      <div className="list-group">
        {artistArray.map((artist, index) => (
          <div className="list-group-item" key={index}>
            <h2>
              {index + 1}. {artist.name}
            </h2>
            {/* <ArtistTopAlbumsResults
              artistAlbumsArray={artistAlbumsArray}
              artist={artist}
            /> */}
          </div>
        ))}
      </div>
    </>
  );
};
export default HomePageResults;
