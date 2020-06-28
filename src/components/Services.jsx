import React, { Component } from "react";
import { Avatar } from "antd";
import { connect } from "react-redux";
import "./Services.css"


class Services extends Component {
  constructor() {
    super();
    this.display = this.display.bind(this);
   
  }
     
   
    display = () => {
      db.collection("patients")
              .doc(cc.state.doa)
              .collection("Dr Nikhil")
              .doc("09:00AM")
               .then((doc)=>({
                console.log(doc.data())
      })
    }
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
              <div className="col-6">{name}</div>
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
  name: state.patientDetails.name,
 
});

export default connect(mapStateToProps, null)(Services);


