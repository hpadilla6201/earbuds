import { Link } from "react-router-dom";
import LastFmSearch from "../../lastFm/lastFm-search";


const Header = () => {
    return (
        <header className="mt-2"> 
            <nav className="navbar navbar-expand-lg bg-blue">
            <div className="col-3">
                <h1>earbuds logo</h1>
            </div>
            <div className="col-7">
                {/* <div className="col-10">
                <form class="form-inline">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                </div> */}
                {/* <LastFmReducer /> */}
                <LastFmSearch />
                
            </div>
            <div className="col-2">
                <div className="btn-group">
                    <button type="button" className="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown">
                        Profile
                    </button>
                    <div className="dropdown-menu">
                        <Link to="/profile" className="dropdown-item" >My Profile</Link>
                        <a className="dropdown-item" href="./index.js">Another action</a>
                        <a className="dropdown-item" href="./index.js">Something else here</a>
                    </div>
                </div>
            </div>
          </nav>
        </header>
    );
};

export default Header;