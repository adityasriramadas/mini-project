import React from "react";
import NavigationBar from "./components/nav";
import About from "./components/About";
import Login from "./components/login";
import Appointment from "./components/appointment";
import Signup from "./components/signup";
import Home from "./components/home";
import Confirm from "./components/Confirm";
import Services from "./components/Services";
import Profile from "./components/Profile";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import firebase from "./firebase";
import { connect } from "react-redux";
import { setUserDetails, login } from "./actions/loginActions";
import "font-awesome/css/font-awesome.min.css";
require("firebase/firestore");
class App extends React.Component {
  constructor() {
    super();
  }
  componentDidMount() {
    const cc = this;
    const db = firebase.firestore();
    var data;
    let unsubscribe = firebase.auth().onAuthStateChanged(function (user) {
      unsubscribe();
      if (user) {
        var userRef = db.collection("user").doc(user.uid);
        userRef.get().then(function (doc) {
          if (doc.exists) {
            // console.log("rider exists constructor");
            data = doc.data().personalInfo;
            cc.props.setUserDetails(data);
            cc.props.login();
          }
        });
      }
    });
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home}></Route>

            <Route path="/appointment" component={Appointment}></Route>

            <Route path="/About" component={About}></Route>

            <Route path="/login" component={Login}></Route>

            <Route path="/signup" component={Signup}></Route>

            <Route path="/Services" component={Services}></Route>

            <Route path="/Profile" component={Profile}></Route>

            <Route path="/confirm" component={Confirm}></Route>
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.loginStatus.userDetails,
  loginStatus: state.loginStatus,
});

export default connect(mapStateToProps, { login, setUserDetails })(App);
