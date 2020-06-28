import React, { Component } from "react";
import { Avatar } from "antd";
import { connect } from "react-redux";
import "./Services.css";

import firebase from "../firebase";
import "firebase/firestore";
require("firebase/firestore");

const db = firebase.firestore();
class Services extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
    };
    this.display = this.display.bind(this);
  }
  componentDidMount() {
    this.display();
  }
  display = () => {
    const cc = this;
    db.collection("patients")
      .doc("2020-07-01")
      .collection("Dr Nikhil")
      .doc("09:00 AM")
      .get()
      .then(function (doc) {
        if (doc.exists) {
          var data = doc.data();
          console.log(doc.data());
          cc.setState({
            name: data.patientDetails.name,
          });
        }
      });
  };

  render() {
    return (
      <div className="selected-driver-details pt-3">
        <h3 className="choose">Your Driver</h3>
        <div className="selected-driver-details-container">
          <form className="container">
            <div className="driver-photo">
              <Avatar src="https://semantic-ui.com/images/avatar2/large/elyse.png" />
            </div>
            <div className="row ml-3 mt-3">
              <div className="col-4">Name</div>
              <div className="col-1">:</div>
              <div className="col-6">{this.state.name}</div>
            </div>
          </form>
        </div>
        <div className="d-flex flex-row justify-content-center my-2">
          <button type="button" className="btn btn-dark book">
            Cancel
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.loginStatus.userDetails,
});

export default connect(mapStateToProps, null)(Services);
