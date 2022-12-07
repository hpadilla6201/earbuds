import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import RnbAlbumResults from "./results";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTopRnbAlbumsThunk } from "../../lastFm/lastFm-thunks";
const RnbTopAlbums = () => {
  const albumArray = useSelector((state) => state.lastFm.topRnbAlbums);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRnbAlbumsThunk());
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
            <RnbAlbumResults albumArray={albumArray} />
          </div>
        </div>
      </div>
    </>
  );
};
export default RnbTopAlbums;
