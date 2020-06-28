import React, { Component } from "react";
//import { Avatar } from "antd";
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
           
            name1: data.patientDetails.name,

          });
        }
      });
  };

  render() {
    return (
      <div>Appointments
      <div className="selected-driver-details pt-3">
        
         <div className="row ml-3 mt-1">
              <div className="col-4">Doa</div>
              <div className="col-1">:</div>
              <div className="col-6">2020-07-01</div>
            </div>
            <div className="row ml-3 mt-2">
              <div className="col-4">Doctor</div>
              <div className="col-1">:</div>
              <div className="col-6">Dr Nikhil</div>
            </div>
            
            <div className="row ml-3 mt-3">
              <div className="col-4">Name</div>
              <div className="col-1">:</div>
              <div className="col-6">{this.state.name1}</div>
            </div>
            </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  userDetails: state.loginStatus.userDetails,
});

export default connect(mapStateToProps, null)(Services);
