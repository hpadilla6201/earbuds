import React from "react";
import AlbumList from "../Album-List";
import Header from "../Header";
import NavigationSidebar from "../NavigationSidebar";
const Home = () => {
    return (
        <>
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
        </>
    );
}

export default Home;
