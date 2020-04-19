import React from 'react';
import {Link} from  'react-router-dom';


import "./login.css"


class Login extends React.Component{

    render(){
        return(
            <div className='ls'>

                <div className="signup-form">
                    <form>
                        <h2>Login</h2>
                        <p>Please enter username and password to login!</p>
                        <hr/>
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-user"></i></span>
                                <input type="text" className="form-control" name="username" placeholder="Username" required="required"/>
                            </div>
                        </div>
                        
                        <div className="form-group">
                            <div className="input-group">
                                <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                                <input type="text" className="form-control" name="password" placeholder="Password" required="required"/>
                            </div>
                        </div>
                       
                        
                        <div className="form-group">
                            <label className="checkbox-inline"><input type="checkbox" required="required"/>Remember me</label>
                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-lg">Login</button>
                        </div>
                    </form>
                    <div className="text-center">Don't have an account?

                        
                            <Link to="/Signup">Sign up here</Link>
                        

                    </div>
                </div>

                   
            </div>  
        );
    }
}

export default Login;