import React from 'react';
import { Link } from "react-router-dom";
class About extends React.Component{

    render(){

        return(
            <div className="serv">
                
            <section className="about_us padding_top">
                <div className="container">
                    <div className="row justify-content-between align-items-center">
                    <div className="col-md-6 col-lg-6">
                        <div className="about_us_img">
                        <img src="/top_service.png" alt="" />
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-5">
                        <div className="about_us_text">
                        <h2>About us</h2>
                        <p>
                        Health Care Hospitals was established in 2004 by Dr.Ruhi, renowned as the architect of modern healthcare in India.Health Care Hospitals is acclaimed for pioneering the private healthcare revolution in the country.

Health Care Hospitals has emerged as Asia’s foremost integrated healthcare services provider and has a robust presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics and several retail health models. 

The cornerstones of Healt Care’s legacy are its unstinting focus on clinical excellence, affordable costs, modern technology and forward-looking research & academics. Health Care Hospitals was among the first few hospitals in the world to leverage technology to facilitate seamless healthcare delivery.  

Since its inception, Healt Care Hospitals has been honoured by the trust of over 150 million individuals who came from 140 countries.

As a responsible corporate citizen, Health Care Hospitals takes the spirit of leadership well beyond business and has embraced the responsibility of keeping India healthy. Recognizing that Non Communicable Diseases (NCDs) are the greatest threat to the nation, Health Care Hospitals is continuously educating people about preventive healthcare as the key to wellness. 
                        </p>
                        
                        
                        </div>
                    </div>
                    </div>
                </div>
                </section>
               

            </div>
        );
    }
}

export default About;