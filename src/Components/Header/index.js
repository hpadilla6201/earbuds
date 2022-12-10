import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logoutThunk } from "../../users/users-thunk";
import { useNavigate } from "react-router-dom";

const Header = () => {
  let location = useLocation();
  let active = location.pathname;
  const { currentUser } = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutBtn = () => {
    dispatch(logoutThunk());
    navigate("/login");
  };

  return (
    <header className="mt-2">
      <nav className="navbar navbar-expand-lg bg-blue">
        <div className="col-3">
          <h1 className="text-primary">Earbuds</h1>
        </div>
        <div className="col-7">
          <ul className="list-group list-group-horizontal">
            <Link
              to="/home"
              className={`list-group-item ${
                active === "/home" ? "active" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/search"
              className={`list-group-item ${
                active === "/search" ? "active" : ""
              }`}
            >
              Search
            </Link>
            <Link
              to="/users"
              className={`list-group-item ${
                active === "/users" ? "active" : ""
              }`}
            >
              Users
            </Link>
          </ul>
        </div>
        <div className="col-2 d-flex justify-content-center">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-bs-toggle="dropdown"
            >
              Profile
            </button>

            {currentUser && (
              <div className="dropdown-menu">
                <Link to="/profile" className="dropdown-item">
                  My Profile
                </Link>
                <Link to="/editProfile" className="dropdown-item">
                  Edit Profile
                </Link>
                <hr className="dropdown-divider"></hr>
                <button className="dropdown-item" onClick={handleLogoutBtn}>
                  Logout
                </button>
              </div>
            )}
            {!currentUser && (
              <div className="dropdown-menu">
                <Link to="/login" className="dropdown-item">
                  Login
                </Link>
                <Link to="/register" className="dropdown-item">
                  Register
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
