import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTopArtistsThunk } from "../../lastFm/lastFm-thunks";
import HomePageResults from "./results";
const Home = () => {
  // const [searchTerm, setSearchTerm] = useState();
  const artistArray = useSelector((state) => state.lastFm.topArtists);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopArtistsThunk());
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
            <HomePageResults artistArray={artistArray} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
