import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findAlbumBySearchTermThunk } from "./lastFm-thunks";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Header";
// import AlbumSearchResults from "../Components/AlbumsSearchResults";

const LastFmSearch = () => {
  const [searchTerm, setSearchTerm] = useState();
  const { albums } = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(findAlbumBySearchTermThunk(searchTerm));
  }, [dispatch, searchTerm]);
  return (
    <>
      <Header />
      {/* <NavigationSidebar /> */}
      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-primary float-end"
            onClick={() => {
              dispatch(findAlbumBySearchTermThunk(searchTerm));
              navigate("/searchResults");
            }}
          >
            Search
          </button>
          <input
            className="form-control w-75"
            placeholder="Search Albums"
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
            value={searchTerm}
          />
        </li>
        {albums &&
          albums.map((album) => (
            <li key={album.aid} className="list-group-item">
              {album.title}
            </li>
          ))}
      </ul>
    </>
  );
};

export default LastFmSearch;
