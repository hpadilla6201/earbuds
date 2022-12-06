import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import LastFmSearch from "../../lastFm/lastFm-search";

const Header = () => {
  let location = useLocation();
  let active = location.pathname;
  const { currentUser } = useSelector((state) => state.users);

  return (
    <header className="mt-2">
      <nav className="navbar navbar-expand-lg bg-blue">
        <div className="col-3">
          <h1>Earbuds</h1>
        </div>
        <div className="col-7">
          {/* <LastFmSearch /> */}
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
