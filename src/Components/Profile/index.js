import { useDispatch, useSelector } from "react-redux";
import { logoutThunk } from "../../users/users-thunk";
import { useNavigate } from "react-router";
import Header from "../Header";

const Profile = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const handleLogoutBtn = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };
  return (
    <>
      <Header />
      <h1>Profile</h1>
      {currentUser && <h2>Welcome new user: {currentUser.username}</h2>}
      <button className="btn btn-danger" onClick={handleLogoutBtn}>
        Logout
      </button>
    </>
  );
};
export default Profile;
