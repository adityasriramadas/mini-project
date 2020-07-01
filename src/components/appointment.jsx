import React from "react";
import { Cascader } from "antd";
import "antd/dist/antd.css";
import firebase from "../firebase";
import "./appointment.css";
//import { login, setUserDetails } from "../actions/loginActions";
import { connect } from "react-redux";
import { Redirect } from "react-router";
//import { message } from "antd";
//import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

require("firebase/auth");
require("firebase/database");
//var firebasee = require("firebase/app");
var db = firebase.firestore();
var date = new Date();
date.setDate(date.getDate() + 1);
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
    value: "09:15 AM",
    label: "09:15 AM",
  },
  {
    value: "09:30 AM",
    label: "09:30 AM",
  },
  {
    value: "10:45 AM",
    label: "10:45 AM",
  },
  {
    value: "11:00 AM",
    label: "11:00 AM",
  },
  {
    value: "11:15 AM",
    label: "11:15 AM",
  },
];

const patienttype = [
  {
    value: "New Patient",
    label: "New Patient",
  },
  {
    value: "Existing Patient",
    label: "Existing Patient",
  },
];
const doctoptions = [
  {
    value: "ENT Specl",
    label: "ENT Specl",
    children: [
      {
        value: "Dr Nikhil",
        label: "Dr.Nikhil",
      },

      {
        value: "Dr Sai",
        label: "Dr.Sai",
      },
    ],
  },
  {
    value: "(psychology)",
    label: "(psychology)",
    children: [
      {
        value: "Dr Nikhil",
        label: "Dr.Nikhil",
      },

      {
        value: "Dr Sai",
        label: "Dr.Sai",
      },
    ],
  },
  {
    value: "(Heart specialist)",
    label: "Heart specialist)",
    children: [
      {
        value: "Dr Nikhil",
        label: "Dr.Nikhil",
      },

      {
        value: "Dr Sai",
        label: "Dr.Sai",
      },
    ],
  },
];
class Appointment extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      age: "",
      number: "",
      email: "",
      doctor: "",
      typ: "",
      doa: "",
      toa: "",
      nClass: "",
      ageClass: "",
      pnClass: "",
      emClass: "",
      docClass: "",
      typClass: "",
      doaClass: "",
      toaClass: "",
      redirect: false,
      count: 0,
    };
   
   
    this.onClick = this.onClick.bind(this);
    this.onChange = this.onChange.bind(this);
    this.timeChange = this.timeChange.bind(this);
    this.val=this.val.bind(this);
    this.OndoctChange = this.OndoctChange.bind(this);
    this.validate = this.validate.bind(this);
    this.typePatient = this.typePatient.bind(this);
  }
  componentDidMount(){
    db.collection("patients")
        .where("doa","==","07-08-2020")
              .get()
              .then(snap => {
                  snap.forEach(doc => {
                      if(doc){
                        console.log("Hi")
                        //flag=true;
                       // return flag;
                       console.log(doc.data())
                       // count++;
                      }
                      else{
                        console.log("Its working");
                      }
                  });
              
                }).catch(function () {
                  console.log("fail");
                })

  }
  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  timeChange = (time) => {
    this.setState({
      toa: time[0],
    });
  };
  typePatient = (type) => {
    this.setState({
      typ: type,
    });
  };
  validate = () => {
    var isError = false;
    const phoneno = /^\d{10}$/;
    // eslint-disable-next-line
    const ema = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;
    if (this.state.name === "") {
      isError = true;
      this.setState({
        nClass: "is-invalid",
      });
    } else {
      this.setState({
        nClass: "is-valid",
      });
    }
    if (!this.state.number.match(phoneno)) {
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
    if (this.state.doctor === "") {
      isError = true;
      this.setState({
        docClass: "is-invalid",
      });
    } else {
      this.setState({
        docClass: "is-valid",
      });
    }
    if (this.state.typ === "") {
      isError = true;
      this.setState({
        typClass: "is-invalid",
      });
    } else {
      this.setState({
        typClass: "is-valid",
      });
    }
    if (this.state.age === "") {
      isError = true;
      this.setState({
        ageClass: "is-invalid",
      });
    } else {
      this.setState({
        ageClass: "is-valid",
      });
    }
    if (this.state.toa === "") {
      isError = true;
      this.setState({
        toaClass: "is-invalid",
      });
    } else {
      this.setState({
        toaClass: "is-valid",
      });
    }
    if (this.state.doa === "") {
      isError = true;
      this.setState({
        doaClass: "is-invalid",
      });
    } else {
      this.setState({
        doaClass: "is-valid",
      });
    }
    return isError;
  };
  OndoctChange = (doct) => {
    this.setState({
      doctor: doct,
    });
  };
  val =() =>{
    let flag=false;
    const cc = this;
    const err = this.validate();
    //var time_of_app = cc.state.toa;
    if (!err) {
      db.collection("patients")
          .where("doa","==",cc.state.doa)
                .get()
                .then(snap => {
                    snap.forEach(doc => {
                        if(doc.exists){
                          //console.log("Hi")
                          flag=true;
                          return flag;
                         // console.log(doc.data())
                         // count++;
                        }
                    });
                
                  }).catch(function () {
                    console.log("fail");
                  });
                  
        }
       // console.log(count);
        return flag;
  }

  onClick = (e) => {
    e.preventDefault();
    var c=this.val();
    const cc = this;
    
        if(!c){
          console.log("Hello");
         // console.log(c);
            db.collection("patients")
            .doc()
            .set({
                name: cc.state.name,
                age: cc.state.age,
                phonenumber: cc.state.number,
                email: cc.state.email,
                doctor: cc.state.doctor,
                doa: cc.state.doa,
                toa: cc.state.toa,
            
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
      }
 


  };
  render() {
    return (
      <div>
        {!this.props.status && <Redirect to="/login" />}
        {this.state.redirect && <Redirect to="/confirm" />}
        <div className="appointment_sec">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-5 offset-lg-7 offset-md-6">
                <div className="appoint_ment_form">
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
                              className={`form-control ${this.state.nClass}`}
                              onChange={this.onChange}
                            ></input>
                          </div>
                          <div className="invalid-feedback">
                            Name is invalid.
                          </div>
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
                        className={`form-control ${this.state.ageClass}`}
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div className="form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        //id="em"
                        className={`form-control ${this.state.emClass}`}
                        onChange={this.onChange}
                      ></input>
                    </div>

                    <div className="form-group">
                      <input
                        type="tel"
                        pattern="[0-9]{10}"
                        name="number"
                        placeholder="Phone Number"
                        required="required"
                        //id="pw"
                        className={`form-control ${this.state.pnClass}`}
                        onChange={this.onChange}
                      ></input>
                    </div>
                    <div>
                      <Cascader
                        style={{
                          width: "50 !important",
                          height: "35 !important",
                        }}
                        placeholder="Select Doctor"
                        options={doctoptions}
                        className={`form-control ${this.state.docClass}`}
                        onChange={this.OndoctChange}
                        changeOnSelect
                      />
                    </div>
                    <div className="form-group"></div>
                    <div className="form-group">
                      <Cascader
                        style={{
                          width: "50 !important",
                          height: "18 !important",
                        }}
                        placeholder="Patient Type"
                        options={patienttype}
                        className={`form-control ${this.state.typClass}`}
                        onChange={this.typePatient}
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
                        className={`form-control ${this.state.doaClass}`}
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
                      className={`form-control ${this.state.toaClass}`}
                      onChange={this.timeChange}
                      changeOnSelect
                    />
                    <div>
                      <button className="btn" onClick={this.onClick}>
                        Get Your Free Appointment
                      </button>
                    </div>
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
const mapStateToProps = (state) => ({
  userDetails: state.loginStatus.userDetails,
  status: state.loginStatus.status,
});

export default connect(mapStateToProps, {})(Appointment);
