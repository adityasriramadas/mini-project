import React from 'react';

import "./appointment.css";


class Appointment extends React.Component{

    render(){
        return(
            <div class="appointment_sec">
                <div class="container">
                    <div class="row">
                        <div class="col-md-6 col-lg-5 offset-lg-7 offset-md-6">
                            <div class="appoint_ment_form">
                                <h2>Book an Appointment</h2>
                                <p>Please fill details to book an appointment!</p>
                                <hr/>
                                <form>
                                    <input type="text" placeholder="Name of patients" pattern='[A-Za-z]{3,}' required="required"/>
                                    <input placeholder='Age' type="number" min="1" max="99" required="required"></input>
                                    <input type="tel" placeholder="Mobile Number" pattern='[0-9]{10}' oninvalid="this.setCustomValidity(this.willValidate?'':'your custom message')" required="required"></input>
                                    <input id="datepicker-disable-past" type="date" placeholder='DDMMYYYY' min='2020-04-16' required="required"/>
                                    
                                    <button type="submit" class="btn">Get Your Free Appointment</button>
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