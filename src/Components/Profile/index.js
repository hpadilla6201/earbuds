import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../users/users-thunk";
import { useNavigate } from "react-router";
import Header from "../Header";
import { useEffect } from "react";
import { findUserByIdThunk } from "../../users/users-thunk";
import { findReviewsByAuthorThunk } from "../../reviews/reviews-thunk";
import { findFollowersThunk } from "../../follows/follows-thunk";
import { findFollowingThunk } from "../../follows/follows-thunk";
import { Link } from "react-router-dom";

const Profile = () => {
  const { reviews } = useSelector((state) => state.reviews);
  const { followers, following } = useSelector((state) => state.follows);
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };
  useEffect(() => {
    dispatch(findUserByIdThunk(currentUser._id));
    dispatch(findReviewsByAuthorThunk(currentUser._id));
    dispatch(findFollowersThunk(currentUser._id));
    dispatch(findFollowingThunk(currentUser._id));
  }, [dispatch, currentUser._id]);
  return (
    <>
      <Header />
      {currentUser && (
        <h2 className="text-center">Welcome! {currentUser.username}</h2>
      )}
      <h1>My Profile</h1>

      <h1>Reviews:</h1>
      <div className="list-group">
        {reviews &&
          reviews.map((review) => (
            <li className="list-group-item">
              <Link to={`/details/${review.lastFmID}`}>
                {review.review} {review.lastFmID}
              </Link>
            </li>
          ))}
      </div>
      <h2>Following </h2>
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
      <button className="btn btn-danger" onClick={handleLogoutBtn}>
        Logout
      </button>
    </>
  );
};
export default Profile;
