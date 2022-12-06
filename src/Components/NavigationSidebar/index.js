import React from "react";
import { Link, useLocation } from "react-router-dom";
const NavigationSidebar = () => {
  let location = useLocation();
  let active = location.pathname;
  return (
    <div className="list-group">
      <Link
        to="/topArtists"
        className={`list-group-item ${
          active === "/topArtists" ? "active" : ""
        }`}
      >
        <span>Artists</span>
      </Link>
      <Link
        to="/topHipHopAlbums"
        className={`list-group-item ${
          active === "/topHipHopAlbums" ? "active" : ""
        }`}
      >
        <span>Hip-Hop Albums</span>
      </Link>
      <Link
        to="/topRapAlbums"
        className={`list-group-item ${
          active === "/topRapAlbums" ? "active" : ""
        }`}
      >
        <span>Rap Albums</span>
      </Link>
      <Link
        to="/topRnbAlbums"
        className={`list-group-item ${
          active === "/topRnbAlbums" ? "active" : ""
        }`}
      >
        <span>R&B Albums</span>
      </Link>
      <Link
        to="/topPopAlbums"
        className={`list-group-item ${active === "messages" ? "active" : ""}`}
        href="./index.js"
      >
        <span>Pop Albums</span>
      </Link>
    </div>
  );
};

export default NavigationSidebar;
