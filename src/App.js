import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Home from './Components/Home';
import {BrowserRouter} from "react-router-dom";
import {Routes, Route} from "react-router";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import Profile from './Components/Profile';
import albumReducer from './reducers/album-reducer';
import lastFmReducer from './lastFm/lastFm-reducer';
import AlbumSearchResults from './Components/AlbumsSearchResults';

const store = configureStore({
  reducer: {
      albums: albumReducer,
      lastFm: lastFmReducer
  }
})

function App() {
  return (
    <div className="container mt-4 mb-4">
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/profile" element={<Profile/>} />
          <Route path='/searchResults' element={<AlbumSearchResults/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
    </div>
  );
}

export default App;
