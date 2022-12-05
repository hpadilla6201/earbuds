import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTopTracksThunk } from "../../lastFm/lastFm-thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const AlbumList = () => {
  const albumArray = useSelector((state) => state.lastFm);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopTracksThunk());
  }, [dispatch]);

  return (
    <>
      {currentUser && <h2>Hello: {currentUser.username}</h2>}
      <h1>Top Artists</h1>
      <div className="list-group">
        {albumArray.map((track, index) => (
          <div className="list-group-item" key={index}>
            <h2>{track.name}</h2>
            <Link to="">
              <img src={track.image[2]["#text"]} alt="" />
            </Link>

            <h2>By: {track.artist.name}</h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default AlbumList;
