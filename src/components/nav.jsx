import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";
import { connect } from "react-redux";
//import { Menu, Dropdown, Button } from "antd";
import { setItem } from "../actions/userActions";
import firebase from "../firebase";
import { logout, setUserDetails } from "../actions/loginActions";

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.signout = this.signout.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);

    this.state = {
      collapsed: true,
    };
  }
  signout = () => {
    const cc = this;
    firebase
      .auth()
      .signOut()
      .then(function () {
        cc.props.logout();
        cc.props.setUserDetails(null);
        // console.log("Sign-out successful.");
      })
      .catch(function (error) {
        console.log("An error happened.");
      });
  };

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
  onItemClick = (event) => {
    if (event.key === "2") {
      this.signout();
    }
  };

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
            <div className="logo" align="center">
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
                    <i className="fa fa-home"></i>Home
                  </Link>
                </li>
               
                <li className="nav-item">
                  <Link to="/Profile" className="nav-link">
                    <i className="fa fa-medkit"></i>Doctors
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to="/About" className="nav-link">
                    <i className="fa fa-info-circle"></i>About
                  </Link>
                </li>
                
                  {this.props.status &&
                  this.props.userDetails.uid === "pIQDesekmvhsI62jdeo7jMfDywl1" ? (
                    <li className="nav-item">
                      <Link to="/Services"  className="nav-link">
                      <i className="fa fa-plus-square"></i>Appointments
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-item">
                        <Link to="/appointment"  className="nav-link">
                        <i className="fa fa-plus-square"></i>Book Now 
                        </Link>
                      </li>
                  )}
              
                <li className="nav-item">
                {this.props.status ? (
                  <li className="nav-item" onClick={this.signout}>
                    <Link to="/" className="nav-link">
                      <i className="fa fa-users"></i>
                      {this.props.userDetails.username}
                    </Link>
                  </li>
                ) : (
                  <li className="nav-item">
                    <Link to="/login" className="nav-link">
                      <i className="fa fa-user" aria-hidden="true"></i> Log In
                    </Link>
                  </li>
                )}
                </li>
              </ul>
            </div>
          </nav>
        </header>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  status: state.loginStatus.status,
  checking: state.loginStatus.checking,
  userDetails: state.loginStatus.userDetails,
  userAction: state.userAction,
});

export default connect(mapStateToProps, { setItem, logout, setUserDetails })(
  Navbar
);
