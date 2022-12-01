import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import { findAlbumBySearchTermThunk } from "./lastFm-thunks";
import { useNavigate } from "react-router-dom";

const LastFmSearch = () => {
    const [searchTerm, setSearchTerm] = useState('Take Care')
    const {albums} = useSelector((state) => state.albums)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    useEffect(() => {
        dispatch(findAlbumBySearchTermThunk(searchTerm))
    }, [dispatch, searchTerm])
    return (
        <>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary float-end"
                        onClick={() => {
                            dispatch(findAlbumBySearchTermThunk(searchTerm))
                            navigate("/searchResults")
                        }}>Search
                        
                    </button>
                    <input
                        className="form-control w-75"
                        onChange={(e) => {
                            setSearchTerm(e.target.value)
                        }}
                        value={searchTerm}/>
                </li>
                {
                    albums && albums.map((album) =>
                        <li key={album.aid} className="list-group-item">
                            {album.title}
                        </li>
                    )
                }
            </ul>
        </>
    )
}

export default LastFmSearch