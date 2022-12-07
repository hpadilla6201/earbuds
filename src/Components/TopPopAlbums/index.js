import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import PopAlbumsResults from "./results";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTopPopAlbumsThunk } from "../../lastFm/lastFm-thunks";
const PopTopAlbums = () => {
  const albumArray = useSelector((state) => state.lastFm.topPopAlbums);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopPopAlbumsThunk());
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
            <PopAlbumsResults albumArray={albumArray} />
          </div>
        </div>
      </div>
    </>
  );
};
export default PopTopAlbums;
