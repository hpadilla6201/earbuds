import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./Components/Home";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import Profile from "./Components/Profile";
import albumReducer from "./reducers/album-reducer";
import lastFmReducer from "./lastFm/lastFm-reducer";
import LastFmSearch from "./lastFm/lastFm-search";
import Login from "./users/login";
import usersReducer from "./users/users-reducer";
import Register from "./users/register";
import ProtectedRoute from "./users/protected-route";
import Albums from "./albums";
import RapTopAlbums from "./Components/TopRapAlbums";
import HipTopAlbums from "./Components/TopHipHopAlbums";
import RnbTopAlbums from "./Components/TopRnbAlbums";
import PopTopAlbums from "./Components/TopPopAlbums";
import TopArtists from "./Components/TopArtists";
import CurrentUser from "./users/current-user";
import reviewsReducer from "./reviews/reviews-reducer";
import LastFmDetails from "./lastFm/lastFm-details";
import PublicProfile from "./users/public-profile-";
import followsReducer from "./follows/follows-reducer";
import Users from "./users";
import EditProfile from "./Components/Profile/edit-profile";

const store = configureStore({
  reducer: {
    albums: albumReducer,
    lastFm: lastFmReducer,
    users: usersReducer,
    reviews: reviewsReducer,
    follows: followsReducer,
  },
});

function App() {
  return (
    <div className="container mt-4 mb-4">
      <Provider store={store}>
        <BrowserRouter>
          <CurrentUser>
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/" element={<Home />} />
              <Route path="/albums" element={<Albums />} />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/editProfile"
                element={
                  <ProtectedRoute>
                    <EditProfile />
                  </ProtectedRoute>
                }
              />
              <Route path="/search" element={<LastFmSearch />} />
              {/* <Route path="/searchResults" element={<AlbumSearchResults />} /> */}
              <Route path="/login" element={<Login />} />
              <Route path="register" element={<Register />} />
              <Route path="/topHipHopAlbums" element={<HipTopAlbums />} />
              <Route path="/topRapAlbums" element={<RapTopAlbums />} />
              <Route path="/topRnbAlbums" element={<RnbTopAlbums />} />
              <Route path="/topPopAlbums" element={<PopTopAlbums />} />
              <Route path="/topArtists" element={<TopArtists />} />
              <Route path="/details/:id" element={<LastFmDetails />} />
              <Route path="/profile/:uid" element={<PublicProfile />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </CurrentUser>
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
