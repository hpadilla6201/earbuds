import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import HipHopAlbumsResults from "./results";
const HipTopAlbums = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10">
            <HipHopAlbumsResults />
          </div>
        </div>
      </div>
    </>
  );
};
export default HipTopAlbums;
