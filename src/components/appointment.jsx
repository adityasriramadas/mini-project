import React from "react";
import { Cascader } from "antd";

import "./appointment.css";
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
    value: "9:00 AM",
    label: "9:00 AM",
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
  onChange(value) {
    console.log(value);
  }
  render() {
    console.log(today);
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
                    />

                    <input
                      placeholder="Age"
                      type="number"
                      min="1"
                      max="99"
                      required="required"
                    ></input>
                    <input
                      type="tel"
                      placeholder="Mobile Number"
                      pattern="[0-9]{10}"
                      required="required"
                    ></input>
                    <input
                      id="datepicker-disable-past"
                      type="date"
                      placeholder="DDMMYYYY"
                      min={today}
                      max={max_date}
                      required="required"
                    />

                    <button type="submit" class="btn">
                      Get Your Free Appointment
                    </button>
                  </fieldset>
                </form>
                <Cascader
                  options={options}
                  onChange={this.onChange}
                  changeOnSelect
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Appointment;
