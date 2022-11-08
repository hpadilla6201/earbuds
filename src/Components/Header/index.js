const Header = () => {
    return (
        <header className="mt-2"> 
            <nav class="navbar navbar-expand-lg bg-blue">
            <div class="col-3">
                <h1>earbuds logo</h1>
            </div>
            <div className="col-7">
                <div class="col-10">
                <form class="form-inline">
                    <input class="form-control" type="search" placeholder="Search" aria-label="Search"/>
                </form>
                </div>
                
            </div>
            <div className="col-2">
                <div class="btn-group">
                    <button type="button" class="btn btn-primary dropdown-toggle"  data-bs-toggle="dropdown">
                        Profile
                    </button>
                    <div class="dropdown-menu">
                        <a class="dropdown-item" href="./index.js">Action</a>
                        <a class="dropdown-item" href="./index.js">Another action</a>
                        <a class="dropdown-item" href="./index.js">Something else here</a>
                    </div>
                </div>
            </div>
          </nav>
        </header>
    );
};

export default Header;