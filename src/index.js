import React from "react";
import ReactDOM from "react-dom";
import NavigationBar from "./components/nav";
import Footer from "./components/Footer";
import About from "./components/About";
import Login from "./components/login";
import Appointment from "./components/appointment";
import Signup from "./components/signup";
import Home from "./components/home";

import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class MyNavbar extends React.Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <NavigationBar />

          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route path="/appointment">
              <Appointment />
            </Route>

            <Route path="/About">
              <About />
            </Route>

            <Route path="/login">
              <Login />
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </div>
    );
  }
}

ReactDOM.render(<MyNavbar />, document.getElementById("root"));
