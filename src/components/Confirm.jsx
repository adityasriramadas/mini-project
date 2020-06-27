import React, { Component } from "react";
import { connect } from "react-redux";
import { logout, setUserDetails } from "../actions/loginActions";
class Confirm extends Component {
  state = {};
  render() {
    return <div>Confirm {this.props.userDetails.username} </div>;
  }
}
const mapStateToProps = (state) => ({
 
  userDetails: state.loginStatus.userDetails,
 
});

export default connect(mapStateToProps, { logout, setUserDetails })(
  Confirm
);


