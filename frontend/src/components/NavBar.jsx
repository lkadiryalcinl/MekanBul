import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div className="navbar-default navbar navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <NavLink className="navbar-brand" to="/">
            Mekanbul
          </NavLink>
          <button
            className="navbar-toggle"
            type="button"
            data-toggle="collapse"
            data-target="#navbar-main"
          >
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
        </div>
        <div id="navbar-main" className="navbar-collapse collapse">
          <div className="row">
            <div className="col-md-12">
              <ul className="nav navbar-nav">
                <li>
                  <NavLink to={"admin"}>Yönetici</NavLink>
                </li>
                <li>
                  <NavLink to={"about"}>Hakkında</NavLink>
                </li>
              </ul>
            </div>
            <div className="col-md-12">
              <ul className="nav navbar-nav navbar-right">
                <li>
                  <NavLink to={"login"}>Giriş Yap</NavLink>
                </li>
                <li>
                  <NavLink to={"register"}>Kayıt Ol</NavLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;