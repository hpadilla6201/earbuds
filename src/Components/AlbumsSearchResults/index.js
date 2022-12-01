import React from "react";
import { useSelector} from 'react-redux'
const AlbumSearchResults = () => {
    const searchResults = useSelector(state => state.lastFm)

    return(
        <ul className="list-group-horizontal">
        {
            searchResults.map((album, index) => (
                <li key={index}>
                    {album.name}
                    
                </li>
            ))
        }
        </ul>
        
    )
    };
export default AlbumSearchResults;