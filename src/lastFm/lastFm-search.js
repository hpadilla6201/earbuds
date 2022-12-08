import { useDispatch } from "react-redux";
import { useState } from "react";
import { findAlbumBySearchTermThunk } from "./lastFm-thunks";
import Header from "../Components/Header";
import AlbumSearchResults from "../Components/AlbumsSearchResults";

const LastFmSearch = () => {
  const [searchTerm, setSearchTerm] = useState();
  //   const [searchLoading, setSearchLoading] = useState(false);
  //   const { albums } = useSelector((state) => state.albums);
  const dispatch = useDispatch();
  //   const navigate = useNavigate();
  //   useEffect(() => {
  //     dispatch(findAlbumBySearchTermThunk(searchTerm));
  //   }, [dispatch, searchTerm]);
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
              //   setSearchLoading(true);
              //   navigate("/searchResults");
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
      </ul>
      {searchTerm && <AlbumSearchResults />}
    </>
  );
};

export default LastFmSearch;
