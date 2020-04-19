import React from 'react';
import {Link} from 'react-router-dom';
import './login.css';


class Signup extends React.Component{

    render(){

        return(

            <div className='ls'>

                <div className="signup-form">
                    <form>
                        <h2>Sign Up</h2>
                        <p>Please fill in this form to create an account!</p>
                        <hr/>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-paper-plane"></i></span>
                                <input type="email" className="form-control" name="email" placeholder="Email Address" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="text" className="form-control" name="password" placeholder="Password" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon">
                                    <i className="fa fa-lock"></i>
                                    <i className="fa fa-check"></i>
                                </span>
                                <input type="text" className="form-control" name="confirm_password" placeholder="Confirm Password" required="required"/>
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="checkbox-inline"><input type="checkbox" required="required"/> I accept the <Link to="#">Terms of Use</Link> &amp; <Link to="#">Privacy Policy</Link></label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">Sign Up</button>
                        </div>
                    </form>
                    <div className="text-center">Already have an account? <Link to="/Login">Login here</Link></div>
                </div>

                   
            </div>  

        );
    }
}

export default Signup;