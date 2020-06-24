import React, { Component } from "react";
import "./login.css";
import { FormGroup } from "react-bootstrap";

import { Button, Form, Label, Input, Alert } from "reactstrap";

import firebase from "../firebase";
import {  Link } from "react-router-dom";

import _ from "lodash";


require("firebase/firestore");

class login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      invalidEmail: false,
      invalidPassword: false,
      // redi: false,
      noacc: false,
      
      
    };

    this.handleChange = this.handleChange.bind(this);
    this.login = this.login.bind(this);
  }
  // UNSAFE_componentWillMount() {
  //   var cc = this;
  //   firebase.auth().onAuthStateChanged(function (user) {
  //     if (user) {
  //       cc.props.login();
  //     }
  //   });
  // }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: _.trim(event.target.value),
    });
  };

  login = () => {
    this.setState({ loading: true });
    let cc = this;
    const db = firebase.firestore();
    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then(function (firebaseUser) {
        var userRef = db.collection("user").doc(firebaseUser.user.uid);
        userRef.get().then(function (doc) {
          if (doc.exists) {
            var data = doc.data().personalInfo;
            cc.props.setUserDetails({ ...data, id: firebaseUser.user.uid });
            cc.props.login();
          } else {
            firebase
              .auth()
              .signOut()
              .then(function () {
                cc.setState({
                  noacc: true,
                  
                });
              });
          }
        });
      })
      .catch(function (error) {
        cc.setState({ loading: false });
        var errorCode = error.code;
        console.log(errorCode);
        if (errorCode === "auth/user-not-found") {
          cc.setState({ noacc: true });
        } else {
          cc.setState({ noacc: false });
        }
        if (errorCode === "auth/invalid-email") {
          cc.setState({ invalidEmail: true });
        } else {
          cc.setState({ invalidEmail: false });
        }
        if (errorCode === "auth/wrong-password") {
          cc.setState({ invalidPassword: true });
        } else {
          cc.setState({ invalidPassword: false });
        }
       
      });
  };

  render() {
    
    return (
      <div>
       
        <Form className="login-form">
          <div>
            
            {this.state.invalidEmail ? (
              <Alert color="danger">Invalid Email</Alert>
            ) : (
              ""
            )}
            {this.state.invalidPassword ? (
              <Alert color="danger">Invalid Password</Alert>
            ) : (
              ""
            )}
            {this.state.noacc ? (
              <Alert color="danger">Couldn't find your account</Alert>
            ) : (
              ""
            )}
          </div>
          <h1>
            <span className="font-weight-bold" style={{ marginBottom: "20px" }}>
             Login
            </span>
          </h1>
          <FormGroup>
            <Label>Email</Label>
            <Input
              name="email"
              type="email"
              id="phoneNumber"
              value={this.state.email}
              placeholder="email"
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label>Password</Label>
            <Input
              value={this.state.password}
              name="password"
              type="password"
              placeholder="password"
              onChange={this.handleChange}
            />
          </FormGroup>
          <Button
            id="sign-in-button"
            className="btn-lg btn-dark btn-block"
            onClick={this.login}
          >
            Log in
          </Button>
          <br />
          <Label className="label">
            <Link to="/Signup">Dont't have an account? Signup</Link>
          </Label>
        </Form>
      </div>
    );
  }
}


export default  login;
