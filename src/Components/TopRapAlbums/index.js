import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import RapAlbumResults from "./results";
const RapTopAlbums = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10">
            <RapAlbumResults />
          </div>
        </div>
      </div>
    </>
  );
};
export default RapTopAlbums;
