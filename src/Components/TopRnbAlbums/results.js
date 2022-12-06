import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopRnbAlbumsThunk } from "../../lastFm/lastFm-thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const RnbAlbumResults = () => {
  const albumArray = useSelector((state) => state.lastFm);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRnbAlbumsThunk());
  }, [dispatch]);

  return (
    <>
      {currentUser && <h2>Hello: {currentUser.username}</h2>}
      <h1>Top R&B Albums</h1>
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
export default RnbAlbumResults;
