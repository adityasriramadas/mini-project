import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, setUserDetails } from "../actions/loginActions";
class Confirm extends Component {
  state = {};
  render() {
    return <div style={{fontSize:"20px", textAlign:"center", color:"green"}}>Your appointment booking is confirm {this.props.userDetails.username} </div>;
  }
}
const mapStateToProps = (state) => ({
 
  userDetails: state.loginStatus.userDetails,
 
});

export default connect(mapStateToProps, { logout, setUserDetails })(
  Confirm
);


