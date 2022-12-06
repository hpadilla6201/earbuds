import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import RnbAlbumResults from "./results";
const RnbTopAlbums = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10">
            <RnbAlbumResults />
          </div>
        </div>
      </div>
    </>
  );
};
export default RnbTopAlbums;
