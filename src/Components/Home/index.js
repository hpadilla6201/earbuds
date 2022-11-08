import React from "react";
import AlbumList from "../Album-List";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
import albumReducer from "../../reducers/album-reducer";
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {album: albumReducer}});
const Home = () => {
    return (
        <Provider store={store}>
            <div className="container">
            <Header /> 
            <div className="row">
                <div className="col-2">
                <NavigationSidebar />
                </div>
               <div className="col-10">
                    <AlbumList />
               </div>
            </div>
        </div>
        </Provider>
        
        
    );
}

export default Home;
