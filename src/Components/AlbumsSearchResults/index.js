import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import LastFmSearch from "../../lastFm/lastFm-search";
// import { useDispatch } from "react-redux";
// import { useEffect } from "react";
// import { findAlbumBySearchTermThunk } from "../../lastFm/lastFm-thunks";

const AlbumSearchResults = () => {
  const searchResults = useSelector((state) => state.lastFm.albumBySearchTerm);
  //   const dispatch = useDispatch();
  //   useEffect(() => {
  //     dispatch(findAlbumBySearchTermThunk());
  //   }, [dispatch]);

  return (
    <>
      {/* <LastFmSearch /> */}
      <div className="list-group">
        {searchResults.map((album, index) => (
          <div className="list-group-item" key={index}>
            <h2>{album.collectionName}</h2>
            <Link to={`/details/${album.collectionId}`}>
              {/* <img src={album.image[2]["#text"]} alt="" /> */}

              <img src={album.artworkUrl100} alt="" />
            </Link>
            <h2>By: {album.artistName}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default AlbumSearchResults;
