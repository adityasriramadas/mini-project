import React from "react";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import firebase from "../firebase";
import "./appointment.css";
import { Redirect } from "react-router";
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
const doctoptions = [
  {
    value: "DR.Nikhil(ENT Specl)",
    label: "DR.Nikhil(ENT Specl)",
  },
  {
    value: "DR.Aditya(psychology)",
    label: "DR.Aditya(psychology)",
  },
  {
    value: "DR.Sahith(Heart specialist)",
    label: "DR.Sahith(Heart specialist)",
  },
];
class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      number: "",
      doctor: "",
      doa: "",
      toa: "",
      redirect: false,
    };
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.OndoctChange = this.OndoctChange.bind(this);
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
  OndoctChange = (doct) => {
    this.setState({
      doctor: doct,
    });
  };
  onClick = (e) => {
    e.preventDefault();
    const cc = this;
    var time_of_app = cc.state.toa;
    db.collection("patients")
      .doc(cc.state.doa)
      .set({
        patientDetails: {
          name: cc.state.name,
          age: cc.state.age,
          email: cc.state.email,
          phonenumber: cc.state.number,
          doctor: cc.state.doctor,
          doa: cc.state.doa,
          toa: time_of_app[0],
        },
      })
      .then(function () {
        console.log("Success");
        cc.setState({
          redirect: true,
        });
      })
      .catch(function () {
        console.log("fail");
      });
  };
  render() {
    return (
      <div>
        {this.state.redirect && <Redirect to="/confirm" />}
        <div class="appointment_sec">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-lg-5 offset-lg-7 offset-md-6">
                <div class="appoint_ment_form">
                  <h2>Book an Appointment</h2>
                  <p>Please fill details to book an appointment!</p>
                  <hr />
                  <form
                    action=""
                    method=""
                    style={{ margin: "auto" }}
                    className="needs-validation col-sm-12"
                    noValidate
                  >
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <div>
                            <input
                              type="text"
                              name="name"
                              placeholder="Name of patients"
                              required="required"
                              //id="fn"
                              //className={`form-control ${this.state.fnClass}`}
                              onChange={this.onChange}
                            ></input>
                          </div>
                          {/* <div className="invalid-feedback">
                        First name is invalid.
                      </div> */}
                        </div>
                      </div>
                    </div>
                    <div className="form-group">
                      <input
                        type="number"
                        name="age"
                        placeholder="Age"
                        min="1"
                        max="99"
                        required="required"
                        //id="pn"
                        // className={`form-control ${this.state.pnClass}`}
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        //id="em"
                        // className={`form-control ${this.state.emClass}`}
                        onChange={this.onChange}
                      ></input>
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        name="phonenumber"
                        placeholder="Phone Number"
                        required="required"
                        //id="pw"
                        // className={`form-control ${this.state.pwClass}`}
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <Cascader
                        style={{
                          width: "50 !important",
                          height: "35 !important",
                        }}
                        placeholder="Select Doctor"
                        options={doctoptions}
                        onChange={this.OndoctChange}
                        changeOnSelect
                      />
                    </div>
                    <div className="form-group">
                      <input
                        id="datepicker-disable-past"
                        type="date"
                        placeholder="DDMMYYYY"
                        min={today}
                        max={max_date}
                        required="required"
                        name="doa"
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <Cascader
                      style={{
                        width: "341 !important",
                        height: "51 !important",
                      }}
                      placeholder="Time Slot"
                      options={options}
                      onChange={this.timeChange}
                      changeOnSelect
                    />

                    <button className="btn" onClick={this.onClick}>
                      Get Your Free Appointment
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
