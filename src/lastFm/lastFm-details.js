import {
  createReviewThunk,
  findReviewsByAlbumThunk,
} from "../reviews/reviews-thunk";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
// import { getAlbumSearchTermbyId } from "./lastFm-reducer";
import { findAlbumByIdThunk } from "./lastFm-thunks";
import Header from "../Components/Header";

const LastFmDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const details = useSelector((state) => state.lastFm.albumById);
  //   const [details, setDetails] = useState({});
  const { reviews } = useSelector((state) => state.reviews);
  //   const { details } = useSelector((state) => state.lastFm.albumById);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsByAlbumThunk(id));
    dispatch(findAlbumByIdThunk(id));
  }, [dispatch, id]);
  const handlePostReviewBtn = () => {
    dispatch(
      createReviewThunk({
        review,
        id,
      })
    );
  };
  return (
    <>
      <Header />
      <h1>{details.collectionName}</h1>
      <div className="row">
        <h3>Artist: {details.artistName}</h3>

        <div>{/* <img src={details.image[2]["#text"]} alt="" /> */}</div>
        <div>
          <img src={details.artworkUrl100} alt="" />
        </div>
        <h3>Release Date:{details.releaseDate}</h3>
        <h3>Genre:{details.primaryGenreName}</h3>
      </div>
      {currentUser && (
        <div>
          <textarea
            onChange={(e) => setReview(e.target.value)}
            className="form-control"
          ></textarea>
          <button onClick={handlePostReviewBtn}>Post Review</button>
        </div>
      )}
      <ul className="list-group">
        {reviews.map((review) => (
          <li className="list-group-item">
            {review.review}
            <Link to={`/profile/${review.author._id}`} className="float-end">
              {review.author.username}
            </Link>
          </li>
        ))}
      </ul>
      <pre>{JSON.stringify(details, null, 2)}</pre>
    </>
  );
};
export default LastFmDetails;
