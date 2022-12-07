import React from "react";
import { useSelector } from "react-redux";
import { getTopArtistsThunk } from "../../lastFm/lastFm-thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const TopArtistsResults = () => {
  const artistArray = useSelector((state) => state.lastFm.topArtists);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopArtistsThunk());
  }, [dispatch]);

  return (
    <>
      {currentUser && <h2>Hello: {currentUser.username}</h2>}
      <h1>Top Artists</h1>
      <div className="list-group">
        {artistArray.map((artist, index) => (
          <div className="list-group-item" key={index}>
            <h2>
              {index + 1}. {artist.name}
            </h2>
          </div>
        ))}
      </div>
    </>
  );
};
export default TopArtistsResults;
