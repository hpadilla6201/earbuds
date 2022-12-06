import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { findAllAlbumsThunk } from "../services/album-thunk";
import { createAlbumsThunk } from "./albums-thunk";

const Albums = () => {
  const { currentUser } = useSelector((state) => state.users);
  // const { albums } = useSelector((state) => state.albums);
  // const { lastFm } = useSelector((state) => state.lastFm);
  const [album, setAlbum] = useState({ title: "New Album" });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findAllAlbumsThunk());
  }, [dispatch]);
  return (
    <>
      <h1>Albums</h1>
      {currentUser && <h2>Welcome {currentUser.username} </h2>}
      <ul className="list-group">
        <li className="list-group-item">
          <button
            className="btn btn-success float-end"
            onClick={() => {
              dispatch(
                createAlbumsThunk({
                  title: album.title,
                })
              );
            }}
          >
            Create
          </button>
          <input
            className="form-control w-75"
            onChange={(e) => setAlbum({ ...album, title: e.target.value })}
            value={album.title}
          />
        </li>

        {/* {albums.map((album, index) => (
          <li className="list-group-item" key={album._id}>
            <i
              onClick={() => {
                dispatch(deleteAlbumThunk(album._id));
              }}
              className="bi bi-trash float-end"
            ></i>

            <i
              onClick={() => {
                dispatch(
                  userLikesAlbumThunk({
                    uid: currentUser._id,
                    aid: lastFm._id, //imdbID
                  })
                );
              }}
              className="float-end bi bi-hand-thumbs-up me-2"
            ></i>
            <i className="float-end bi bi-hand-thumbs-down me-2"></i>

            {album.title}
          </li>
        ))} */}
      </ul>
    </>
  );
};

export default Albums;
