import React from "react";
import "./home.css";
import { Link } from "react-router-dom";
import "./appointment"
import { connect } from "react-redux"
import Footer from "./Footer";
class Home extends React.Component {
  render() {
    return (
      <div className="home">
        <section className="banner_part">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-5 col-xl-5">
                <div className="banner_text">
                  <div className="banner_text_iner">
                    <h5>We are here for your care</h5>
                    <h1>Best Care &amp; Better Doctor</h1>
                    <p>
                      Enough waiting for an appointment.
                      <br></br>
                      Schedule your appointment from anywhere within minutes. 
                    </p>
                    <Link to="/appointment" className="btn_2">
                      Make an appointment
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="banner_img">
                  <img src="/banner_img.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="about_us padding_top">
          <div className="about_usimx">
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
                  Health Care Hospitals was established in 2004 by Dr.Ruhi, renowned as the architect of modern healthcare in India.Health Care Hospitals is acclaimed for pioneering the private healthcare revolution in the country. Health Care Hospitals has emerged as Asia’s foremost integrated healthcare services provider and has a robust presence across the healthcare ecosystem, including Hospitals, Pharmacies, Primary Care & Diagnostic Clinics and several retail health models.
                  </p>
                  <Link className="btn_2 " to="#">
                    learn more
                  </Link>
                  <div className="banner_item">
                    <div className="single_item">
                      <img src="/icon/banner_1.svg" alt="" />
                      <h5>Emergency</h5>
                    </div>

                    <div className="single_item">
                      <img src="/icon/banner_2.svg" alt="" />
                      <h5>Appointment</h5>
                    </div>
                    <div className="single_item">
                      <img src="/icon/banner_3.svg" alt="" />
                      <h5>Qualfied</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isVerified: state.loginStatus.isVerified,
  userDetails: state.loginStatus.userDetails,
  loginStatus: state.loginStatus,
});

export default connect(mapStateToProps, null)(Home);
