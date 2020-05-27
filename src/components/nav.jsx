import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

class Navbar extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true,
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }

  render() {
    const collapsed = this.state.collapsed;
    const classOne = collapsed
      ? "collapse navbar-collapse"
      : "collapse navbar-collapse show";
    const classTwo = collapsed
      ? "navbar-toggler navbar-toggler-right collapsed"
      : "navbar-toggler navbar-toggler-right";

    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-lg navStyle sticky-top">
            <div class="logo" align="center">
              <Link className="brand-navbar" to="#">
                <img src="doc1.svg" alt="Responsive" height="50px"></img>
                <div>Health Care</div>
              </Link>
            </div>

            <button
              type="button "
              onClick={this.toggleNavbar}
              className={`${classTwo}`}
              data-toggle="collapse"
              data-target="#mainMenu"
              aria-controls="mainMenu"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span>
                <i className="fa fa-align-right iconStyle"></i>
              </span>
            </button>

            <div
              className={`${classOne}`}
              id="mainMenu"
              onClick={this.toggleNavbar}
            >
              <ul className="navbar-nav ml-auto navList">
                <li className="nav-item active">
                  <Link to="/" className="nav-link">
                    <i className="fa fa-home"></i>HOME
                    <span className="sr-only">(current)</span>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="Services" className="nav-link">
                    <i className="fa fa-cogs"></i>Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="portfolio.html" className="nav-link">
                    <i className="fa fa-briefcase"></i>Doctors
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    <i className="fa fa-users"></i>About
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/login" className="nav-link">
                    <i className="fa fa-users"></i>Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/appointment" className="nav-link">
                    <i className="fa fa-users"></i>BOOK NOW
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}

export default Navbar;
