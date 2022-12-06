import React from "react";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getTopAristsThunk } from "../../lastFm/lastFm-thunks";
const Home = () => {
  // const [searchTerm, setSearchTerm] = useState();
  const artistArray = useSelector((state) => state.lastFm);
  // const artistAlbumArray = useSelector((state) => state.lastFm);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTopAristsThunk());
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
            <h1>Top Artists</h1>
            <div className="list-group">
              {artistArray.map((artist, index) => (
                <div className="list-group-item" key={index}>
                  <h2>
                    {index + 1}. {artist.name}
                  </h2>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
