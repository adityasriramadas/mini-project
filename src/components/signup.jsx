import React, { Component } from "react";
import firebase from "../firebase";
import "./signup.css";
import { connect } from "react-redux";
import {Redirect} from "react-router-dom";
import { login, setUserDetails } from "../actions/loginActions";

import _ from "lodash";
require("firebase/firestore"); 
const crypto = require("crypto");

var db = firebase.firestore();
var date = new Date();
date = date.toJSON().slice(0, 10);
var today = date.slice(8, 10) + "/" + date.slice(5, 7) + "/" + date.slice(0, 4);

class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      phonenumber: "",
      email: "",
      password: "",
      confirm_password: "",
      Unclass: "",
     
      pnClass: "",
      pwClass: "",
      cpwClass: "",
      emClass: "",
      // isLogged: false,
      
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.validate = this.validate.bind(this);
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: _.trim(event.target.value),
    });
  };
  validate = () => {
    let isError = false;
    // eslint-disable-next-line
    const phoneno = /^\d{10}$/;
    // eslint-disable-next-line
    const ema = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // eslint-disable-next-line
    const passw = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    if (this.state.username === "") {
      isError = true;
      this.setState({
        Unclass: "is-invalid",
      });
    } else {
      this.setState({
        Unclass: "is-valid",
      });
    }
    

    if (!this.state.phonenumber.match(phoneno)) {
      this.setState({
        pnClass: "is-invalid",
      });
      isError = true;
    } else {
      this.setState({
        pnClass: "is-valid",
      });
    }
    if (!this.state.email.match(ema)) {
      this.setState({
        emClass: "is-invalid",
      });
      isError = true;
    } else {
      this.setState({
        emClass: "is-valid",
      });
    }
    if (!this.state.password.match(passw)) {
      this.setState({
        pwClass: "is-invalid",
      });
      isError = true;
    } else {
      this.setState({
        pwClass: "is-valid",
      });
    }
    if (this.state.confirm_password === this.state.password) {
      if (this.state.password === "") {
        this.setState({
          cpwClass: "is-invalid",
        });
        isError = true;
      } else {
        this.setState({
          cpwClass: "is-valid",
        });
      }
    }
    return isError;
  };
  handleClick = (event) => {
    var cc = this;
    const err = this.validate();
    if (!err) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((cred) => {
          //console.log("---creating user---");
          var hash_password = crypto
            .createHash("sha256")
            .update(this.state.password)
            .digest("hex");
          return db
            .collection("user")
            .doc(cred.user.uid)
            .set({
              personalInfo: {
                uid: cred.user.uid,
                username: this.state.username,
                email: this.state.email,
                phonenumber: this.state.phonenumber,
                password: hash_password,
                doj: today,
               
              },
              
            })
            .then(() => {
              firebase.auth().onAuthStateChanged(function (user) {
                if (user) {
                  var userRef = db.collection("user").doc(user.uid);
                  userRef.get().then(function (doc) {
                    if (doc.exists) {
                     
                      var data = doc.data().personalInfo;
                      cc.props.setUserDetails(data);
                      cc.props.login();
                    }
                  });
                }
              });
            });
        })
        .catch(function (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          
          if (errorCode === "auth/email-already-in-use") {
            cc.setState({
              isMember: true,
            });
          } else {
            alert(errorMessage);
          }
        });
    }
  };
  render() {
    return (
      <div>{this.state.isMember ? (
        <div
          className="alert alert-danger fade show text-center w-30"
          role="alert"
        >
          Already a member.
        </div>
      ) : (
        ""
      )}
      {this.props.loginStatus.status ? <Redirect to="/" /> : ""}
      <div className='ls' >
          <div className="signup-form">
                    <form>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <hr/>
               
                    <div className="form-group">
                      <label>User Name</label>
                      <input
                        type="text"
                        name="username"
                        id="un"
                        className={`form-control ${this.state.Unclass}`}
                        onChange={this.onChange}
                      ></input>
                      <div className="invalid-feedback">
                        User name is invalid.
                      </div>
                    </div>
                
                <div className="form-group">
                  <label>Phone Number</label>
                  <input
                    type="tel"
                    name="phonenumber"
                    id="pn"
                    className={`form-control ${this.state.pnClass}`}
                    onChange={this.onChange}
                  ></input>
                  <div className="invalid-feedback">
                    This phone number is invalid
                  </div>
                </div>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    id="em"
                    className={`form-control ${this.state.emClass}`}
                    onChange={this.onChange}
                  ></input>
                  <div className="invalid-feedback">Email is invalid</div>
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    name="password"
                    id="pw"
                    className={`form-control ${this.state.pwClass}`}
                    onChange={this.onChange}
                  ></input>
                  <div className="invalid-feedback">
                    A password between 8 to 15 characters which contain at least
                    one lowercase letter, one uppercase letter, one numeric
                    digit, and one special character.
                  </div>
                </div>
                <div className="form-group">
                  <label>Confirm Password</label>
                  <input
                    type="password"
                    name="confirm_password"
                    id="cpw"
                    className={`form-control ${this.state.cpwClass}`}
                    onChange={this.onChange}
                  ></input>
                  <div className="invalid-feedback">
                    password does not match
                  </div>
                </div>
                <button
                  type="button"
                  className="btn btn-dark btn-lg"
                  onClick={this.handleClick}
                >
                  Sign up
                </button>
              </form>
              
            </div>
            </div>
            </div>
          
       
    );
  }
}
const mapStateToProps = (state) => ({
  loginStatus: state.loginStatus,
});

export default connect(mapStateToProps, { login, setUserDetails })(Signup);

