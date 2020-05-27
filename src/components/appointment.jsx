import React from "react";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import firebase from "../firebase";
import "./appointment.css";
require("firebase/firestore");

var db = firebase.firestore();

var date = new Date();
date = date.toJSON().slice(0, 10);
var today = date.slice(0, 4) + "-" + date.slice(5, 7) + "-" + date.slice(8, 10);
var result = new Date();
result.setDate(result.getDate() + 7);
result = result.toJSON().slice(0, 10);
var max_date =
  result.slice(0, 4) + "-" + result.slice(5, 7) + "-" + result.slice(8, 10);

const options = [
  {
    value: "09:00 AM",
    label: "09:00 AM",
  },
  {
    value: "10:00 AM",
    label: "10:00 AM",
  },
  {
    value: "11:00 AM",
    label: "11:00 AM",
  },
  {
    value: "12:00 PM",
    label: "12:00 PM",
  },
  {
    value: "02:00 PM",
    label: "02:00 PM",
  },
  {
    value: "03:00 PM",
    label: "03:00 PM",
  },
];
class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: 0,
      number: "",
      doa: "",
      toa: "",
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  timeChange = (time) => {
    this.setState({
      toa: time,
    });
  };
  onClick = () => {
    const cc = this;
    var time_of_app = cc.state.toa;
    db.collection("patients")
      .doc(cc.state.doa)
      .set({
        patientDetails: {
          name: cc.state.name,
          age: cc.state.age,
          phonenumber: cc.state.number,
          doa: cc.state.doa,
          toa: time_of_app[0],
        },
      })
      .then(function () {
        console.log("Success");
      })
      .catch(function () {
        console.log("fail");
      });
  };
  render() {
    return (
      <div class="appointment_sec">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-lg-5 offset-lg-7 offset-md-6">
              <div class="appoint_ment_form">
                <h2>Book an Appointment</h2>
                <p>Please fill details to book an appointment!</p>
                <hr />
                <form>
                  <fieldset>
                    <input
                      type="text"
                      ref="name"
                      placeholder="Name of patients"
                      required="required"
                      name="name"
                      onChange={this.onChange}
                    />

                    <input
                      placeholder="Age"
                      type="number"
                      min="1"
                      max="99"
                      required="required"
                      name="age"
                      onChange={this.onChange}
                    ></input>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      pattern="[0-9]{10}"
                      required="required"
                      name="number"
                      onChange={this.onChange}
                    ></input>
                    <input
                      id="datepicker-disable-past"
                      type="date"
                      placeholder="DDMMYYYY"
                      min={today}
                      max={max_date}
                      required="required"
                      name="doa"
                      onChange={this.onChange}
                    />
                    <Cascader
                      style={{
                        width: "341 !important",
                        height: "51 !important",
                      }}
                      options={options}
                      onChange={this.timeChange}
                      changeOnSelect
                    />
                    <button class="btn" onClick={this.onClick}>
                      Get Your Free Appointment
                    </button>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
