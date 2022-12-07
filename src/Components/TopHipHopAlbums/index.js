import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import HipHopAlbumsResults from "./results";
import { useSelector, useDispatch } from "react-redux";
import { getTopHipHopAlbumsThunk } from "../../lastFm/lastFm-thunks";
import { useEffect } from "react";
const HipTopAlbums = () => {
  const albumArray = useSelector((state) => state.lastFm.topHipHopAlbums);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  console.log(albumArray);
  console.log(currentUser);
  useEffect(() => {
    console.log("dispatching useEffect");

    dispatch(getTopHipHopAlbumsThunk());
    console.log("done dispatch");
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
            <HipHopAlbumsResults albumArray={albumArray} />
          </div>
        </div>
      </div>
    </>
  );
};
export default HipTopAlbums;
