import React from "react";
import { useSelector} from 'react-redux'
import { Link } from "react-router-dom";
import LastFmSearch from "../../lastFm/lastFm-search";
const AlbumSearchResults = () => {
    const searchResults = useSelector(state => state.lastFm)

    return(
        <>
         <LastFmSearch />
        <div className="list-group">
        {
            searchResults.map((album, index) => (
                <div className="list-group-item" key={index}>
                    <h2>{album.name}</h2>
                    <Link><img src={album.image[2]['#text']} alt=""/></Link>
                    
                    <h2>By: {album.artist}</h2>
                   
                    
                   
                    
                </div>
            ))
        }
        </div>
        </>
       
        
    )
    };
export default AlbumSearchResults;