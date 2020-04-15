import React from 'react';
import {Link} from 'react-router-dom';
import '../Footer.css'


function Footer(){

    return(

        <footer>
            <div className="container">
                <div className="row">
   
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <ul className='l'>
                        <Link to='/Home'>

                            <img src="doc1.svg" className="figure-img img-fluid" alt="logo" height="150" width="150"></img>
                            
                           <div style={{color:'#FFF',paddingTop:'10px'}}><span>Health Care</span></div>

                        </Link>
                    </ul>
                       
                    </div>
                    
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                        <ul className="links">

                            <span>Quick Links</span>

                                <div align='center'> 

                                    <li>
                                    <Link to="#">Home</Link>
                                    </li>
                                
                                    <li>
                                        <Link to="#">About</Link>
                                    </li>
                                            
                                    <li>
                                            <Link to="#">Blog</Link>
                                    </li>
                                            
                                    
                                </div>
                        </ul>
                    </div>
            
                    <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <ul className="follow">
                                <span>Follow Us</span>
                                    <div style={{display:'flex', justifyContent: "center"}}>
                                        <li>
                                                <Link to="htttps://www.facebook.com/doctor"><i className="fa fa-facebook fa-2x"></i></Link>
                                        </li>
                                            
                                        <li>
                                                <Link to="#"><i className="fa fa-twitter fa-2x"></i></Link>
                                        </li>
                                        
                                        <li>
                                                <Link to="#"><i className="fa fa-instagram fa-2x"></i></Link>
                                        </li>
                                            
                                        
                                    </div>
                                        
                        </ul>
                    </div>
            
            </div> 
            </div>
            
            <div align='center' className='copy'>&#169;All right Reversed.</div>
        </footer>
    );

}

export default Footer;