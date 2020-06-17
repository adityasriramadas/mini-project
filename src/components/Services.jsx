import React,{Component} from 'react';
import "./Services.css"
class Services extends Component{

    render(){

        return(
        <div>
           <div className="serv">
            <section className="feature_part">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="section_tittle text-center">
                    <h2>Our services</h2>
                  </div>
                </div>
              </div>
              <div className="row justify-content-between align-items-center">
                <div className="col-lg-3 col-sm-12">
                  <div className="single_feature">
                    <div className="single_feature_part">
                      <span className="single_feature_icon">
                        <img src="/icon/feature_1.svg" alt="" />
                      </span>
  
                      <h4>Better Future</h4>
                      <p>
                        Darkness multiply rule Which from without life creature
                        blessed give moveth moveth seas make day which divided our
                        have.
                      </p>
                    </div>
                  </div>
                  <div className="single_feature">
                    <div className="single_feature_part">
                      <span className="single_feature_icon">
                        <img src="/icon/feature_2.svg" alt="" />
                      </span>
                      <h4>Better Future</h4>
                      <p>
                        Darkness multiply rule Which from without life creature
                        blessed give moveth moveth seas make day which divided our
                        have.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-sm-12">
                  <div className="single_feature_img">
                    <img src="/service.png" alt="" />
                  </div>
                </div>
                <div className="col-lg-3 col-sm-12">
                  <div className="single_feature">
                    <div className="single_feature_part">
                      <span className="single_feature_icon">
                        <img src="/icon/feature_1.svg" alt="" />
                      </span>
                      <h4>Better Future</h4>
                      <p>
                        Darkness multiply rule Which from without life creature
                        blessed give moveth moveth seas make day which divided our
                        have.
                      </p>
                    </div>
                  </div>
                  <div className="single_feature">
                    <div className="single_feature_part">
                      <span className="single_feature_icon">
                        <img src="/icon/feature_2.svg" alt="" />
                      </span>
                      <h4>Better Future</h4>
                      <p>
                        Darkness multiply rule Which from without life creature
                        blessed give moveth moveth seas make day which divided our
                        have.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
          <section className="doctor_part section_padding" align="center">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-xl-8">
                  <div className="section_tittle text-center">
                    <h2> Experienced Doctors</h2>
                    <p>
                      Face replenish sea good winged bearing years air divide
                      wasHave night male also
                    </p>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-sm-6 col-lg-3">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/doctor/doctor_1.png" alt="doctor" />
                    </div>
                    <div className="single_text">
                      <div className="single_blog_text">
                        <h3>DR Adam Billiard</h3>
                        <p>Heart specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/doctor/doctor_4.png" alt="doctor" />
                    </div>
                    <div className="single_text">
                      <div className="single_blog_text">
                        <h3>DR Adam Billiard</h3>
                        <p>Medicine specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/doctor/doctor_2.png" alt="doctor" />
                    </div>
  
                    <div className="single_text">
                      <div className="single_blog_text">
                        <h3>DR Fred Macyard</h3>
                        <p>CHeart specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 col-lg-3">
                  <div className="single_blog_item">
                    <div className="single_blog_img">
                      <img src="/doctor/doctor_3.png" alt="doctor" />
                    </div>
                    <div className="single_text">
                      <div className="single_blog_text">
                        <h3>DR Justin Stuard</h3>
                        <p>Heart specialist</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        );
    }
}

export default Services;