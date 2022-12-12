import { useParams } from "react-router";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { followUserThunk } from "../follows/follows-thunk";
import { findUserByIdThunk } from "./users-thunk";
import { findReviewsByAuthorThunk } from "../reviews/reviews-thunk";
import { findFollowersThunk } from "../follows/follows-thunk";
import { findFollowingThunk } from "../follows/follows-thunk";
import { Link } from "react-router-dom";
import Header from "../Components/Header";
import { useNavigate } from "react-router";
const PublicProfile = () => {
  const { uid } = useParams();
  const { publicProfile } = useSelector((state) => state.users);
  const { reviews } = useSelector((state) => state.reviews);
  const currentUser = useSelector((state) => state.users.currentUser);
  const { followers, following } = useSelector((state) => state.follows);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleFollowBtn = () => {
    currentUser &&
      dispatch(
        followUserThunk({
          followed: uid,
        })
      );
    if (!currentUser) {
      navigate("/login");
    }
  };
  useEffect(() => {
    dispatch(findUserByIdThunk(uid));
    dispatch(findReviewsByAuthorThunk(uid));
    dispatch(findFollowersThunk(uid));
    dispatch(findFollowingThunk(uid));
  }, [dispatch, uid]);
  return (
    <>
      <Header />
      <button onClick={handleFollowBtn} className="btn btn-success float-end">
        Follow
      </button>
      <h1>{publicProfile && publicProfile.username}'s Profile</h1>
      <ul>
        {reviews &&
          reviews.map((review) => (
            <li>
              <Link to={`/details/${review.lastFmID}`}>
                {review.review} {review.lastFmID}
              </Link>
            </li>
          ))}
      </ul>
      <h2>Following</h2>
      <div className="list-group">
        {following &&
          following.map((follow) => (
            <Link
              to={`/profile/${follow.followed._id}`}
              className="list-group-item"
            >
              {follow.followed.username}
            </Link>
          ))}
      </div>
      <h2>Followers</h2>
      <div className="list-group">
        {followers &&
          followers.map((follow) => (
            <Link
              to={`/profile/${follow.follower._id}`}
              className="list-group-item"
            >
              {follow.follower.username}
            </Link>
          ))}
      </div>
    </>
  );
};

export default PublicProfile;
