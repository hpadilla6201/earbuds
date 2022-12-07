import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import TopArtistsResults from "./results";
import { useSelector } from "react-redux";
import { getTopArtistsThunk } from "../../lastFm/lastFm-thunks";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
const TopArtists = () => {
  const artistArray = useSelector((state) => state.lastFm.topArtists);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopArtistsThunk());
  }, [dispatch]);
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10">
            {currentUser && <h2>Hello: {currentUser.username}</h2>}
            <TopArtistsResults artistArray={artistArray} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopArtists;
