import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import LastFmSearch from "../../lastFm/lastFm-search";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { findAllAlbumsThunk } from "../../services/album-thunk";

const AlbumSearchResults = () => {
  const searchResults = useSelector((state) => state.lastFm);
  //   const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllAlbumsThunk());
  }, [dispatch]);

  return (
    <>
      <LastFmSearch />
      <div className="list-group">
        {searchResults.map((album, index) => (
          <div className="list-group-item" key={index}>
            <h2>{album.name}</h2>
            <Link>
              <img src={album.image[2]["#text"]} alt="" />
            </Link>
            <h2>By: {album.artist}</h2>
            {/* Likes: {album.likes}
            {currentUser && (
              <FontAwesomeIcon
                icon={faThumbsUp}
                onClick={() => {
                  dispatch(
                    userLikesAlbumThunk({
                      uid: currentUser._id,
                      aid: album._id, //lastfm id
                    })
                  );
                }}
              />
            )} */}
          </div>
        ))}
      </div>
    </>
  );
};
export default AlbumSearchResults;
