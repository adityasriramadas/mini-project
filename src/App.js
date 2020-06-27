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
import { setUserDetails, login, resetChecking } from "./actions/loginActions";
require("firebase/firestore");
class App extends React.Component {
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

export default App;
