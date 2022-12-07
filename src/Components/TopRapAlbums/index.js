import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import RapAlbumResults from "./results";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTopRapAlbumsThunk } from "../../lastFm/lastFm-thunks";
const RapTopAlbums = () => {
  const albumArray = useSelector((state) => state.lastFm.topRapAlbums);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopRapAlbumsThunk());
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
            <RapAlbumResults albumArray={albumArray} />
          </div>
        </div>
      </div>
    </>
  );
};
export default RapTopAlbums;
