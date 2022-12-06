import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import PopAlbumsResults from "./results";
const PopTopAlbums = () => {
  return (
    <>
      <div className="container">
        <Header />
        <div className="row">
          <div className="col-2">
            <NavigationSidebar />
          </div>
          <div className="col-10">
            <PopAlbumsResults />
          </div>
        </div>
      </div>
    </>
  );
};
export default PopTopAlbums;
