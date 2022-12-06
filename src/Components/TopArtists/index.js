import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import TopArtistsResults from "./results";
const TopArtists = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10">
            <TopArtistsResults />
          </div>
        </div>
      </div>
    </>
  );
};

export default TopArtists;
