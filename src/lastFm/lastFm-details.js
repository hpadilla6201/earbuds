import {
  createReviewThunk,
  deleteReviewThunk,
  findReviewsByAlbumThunk,
} from "../reviews/reviews-thunk";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { findAlbumByIdThunk } from "./lastFm-thunks";
import Header from "../Components/Header";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";

const LastFmDetails = () => {
  const { id } = useParams();
  const [review, setReview] = useState("");
  const details = useSelector((state) => state.lastFm.albumById);
  const reviews = useSelector((state) => state.reviews.reviewsByAlbum);
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(findReviewsByAlbumThunk(id));
    dispatch(findAlbumByIdThunk(id));
  }, [dispatch, id]);
  const handlePostReviewBtn = () => {
    dispatch(createReviewThunk({ review, lastFmID: id }));
  };
  const deleteReviewHandler = (id) => {
    dispatch(deleteReviewThunk(id));
  };
  return (
    <>
      <Header />
      <h1>{details.collectionName}</h1>
      <div className="row">
        <h3>Artist: {details.artistName}</h3>
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
      <h1>Album Reviews:</h1>
      <ul className="list-group">
        {reviews.map((review, index) => (
          <li className="list-group-item" key={index}>
            <div className="row">
              <Link
                to={`/profile/${review.author._id}`}
                className="float-start text-decoration-none"
              >
                <h4> {review.author.username}</h4>
                <FontAwesomeIcon
                  icon={faX}
                  className="float-end"
                  onClick={() => deleteReviewHandler(reviews._id)}
                />
              </Link>
            </div>
            <div className="row">
              <p>{review.review}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};
export default LastFmDetails;
