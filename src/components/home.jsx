import React from 'react';
import './home.css'

class Home extends React.Component{

    render(){

        return(

            <div class='home'>

            <section class="banner_part">
            <div class="container">
            <div class="row align-items-center">
            <div class="col-lg-5 col-xl-5">
            <div class="banner_text">
            <div class="banner_text_iner">
            <h5>We are here for your care</h5>
            <h1>Best Care &
            Better Doctor</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
            elit sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Quis ipsum suspendisse ultrices gravida.Risus cmodo viverra </p>
            <a href="#" class="btn_2">Make an appointment</a>
            </div>
            </div>
            </div>
            <div class="col-lg-7">
            <div class="banner_img">
            <img src="/banner_img.png" alt=""/>
            </div>
            </div>
            </div>
            </div>
        </section>

        
            <section class="about_us padding_top">
            <div class="container">
            <div class="row justify-content-between align-items-center">
            <div class="col-md-6 col-lg-6">
            <div class="about_us_img">
            <img src="/top_service.png" alt=""/>
            </div>
            </div>
            <div class="col-md-6 col-lg-5">
            <div class="about_us_text">
            <h2>About us</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed
            do eiusmod tempor incididunt ut labore et dolore magna aliqua
            Quis ipsum suspendisse ultrices gravida. Risus cmodo viverra
            maecenas accumsan lacus vel</p>
            <a class="btn_2 " href="#">learn more</a>
            <div class="banner_item">
            <div class="single_item">
            <img src="/icon/banner_1.svg" alt=""/>
            <h5>Emergency</h5>
            </div>
            
            <div class="single_item">
            <img src="/icon/banner_2.svg" alt=""/>
            <h5>Appointment</h5>
            </div>
            <div class="single_item">
            <img src="/icon/banner_3.svg" alt=""/>
            <h5>Qualfied</h5>
            </div>
            </div>
            </div>
            </div>
            </div>
            </div>
            </section>


            <section class="feature_part">
            <div class="container">
            <div class="row justify-content-center">
            <div class="col-xl-8">
            <div class="section_tittle text-center">
            <h2>Our services</h2>
            </div>
            </div>
            </div>
            <div class="row justify-content-between align-items-center">
            <div class="col-lg-3 col-sm-12">
            <div class="single_feature">
            <div class="single_feature_part">
            <span class="single_feature_icon"><img src="/icon/feature_1.svg" alt=""/></span>
            
            <h4>Better Future</h4>
            <p>Darkness multiply rule Which from without life creature blessed
            give moveth moveth seas make day which divided our have.</p>
            </div>
            </div>
            <div class="single_feature">
            <div class="single_feature_part">
            <span class="single_feature_icon"><img src="/icon/feature_2.svg" alt=""/></span>
            <h4>Better Future</h4>
            <p>Darkness multiply rule Which from without life creature blessed
            give moveth moveth seas make day which divided our have.</p>
            </div>
            </div>

            </div>
            <div class="col-lg-4 col-sm-12">
            <div class="single_feature_img">
            <img src="/service.png" alt=""/>
            
            </div>
            </div>
            <div class="col-lg-3 col-sm-12">
            <div class="single_feature">
            <div class="single_feature_part">
            <span class="single_feature_icon"><img src="/icon/feature_1.svg" alt=""/></span>
            <h4>Better Future</h4>
            <p>Darkness multiply rule Which from without life creature blessed
            give moveth moveth seas make day which divided our have.</p>
            </div>
            </div>
            <div class="single_feature">
            <div class="single_feature_part">
            <span class="single_feature_icon"><img src="/icon/feature_2.svg" alt=""/></span>
            <h4>Better Future</h4>
            <p>Darkness multiply rule Which from without life creature blessed
            give moveth moveth seas make day which divided our have.</p>
            </div>
            </div>


            </div>
            </div>
            </div>
            </section>



            <section class="doctor_part section_padding" align='center'>
            <div class="container">
            <div class="row justify-content-center">
            <div class="col-xl-8">
            <div class="section_tittle text-center">
            <h2> Experienced Doctors</h2>
            <p>Face replenish sea good winged bearing years air divide wasHave night male also</p>
            </div>
            </div>
            </div>
            <div class="row">
            <div class="col-sm-6 col-lg-3">
            <div class="single_blog_item">
            <div class="single_blog_img">
            <img src="/doctor/doctor_1.png" alt="doctor"/>
            
            </div>
            <div class="single_text">
            <div class="single_blog_text">
            <h3>DR Adam Billiard</h3>
            <p>Heart specialist</p>
            </div>
            </div>
            </div>
            </div>
            <div class="col-sm-6 col-lg-3">
            <div class="single_blog_item">
            <div class="single_blog_img">
            <img src="/doctor/doctor_4.png" alt="doctor"/>
            
            </div>
            <div class="single_text">
            <div class="single_blog_text">
            <h3>DR Adam Billiard</h3>
            <p>Medicine specialist</p>
            </div>
            </div>
            </div>
            </div>
            <div class="col-sm-6 col-lg-3">
            <div class="single_blog_item">
            <div class="single_blog_img">
            <img src="/doctor/doctor_2.png" alt="doctor"/>
            </div>
            
            <div class="single_text">
            <div class="single_blog_text">
            <h3>DR Fred Macyard</h3>
            <p>CHeart specialist</p>
            </div>
            </div>
            </div>
            </div>
            <div class="col-sm-6 col-lg-3">
            <div class="single_blog_item">
            <div class="single_blog_img">
            <img src="/doctor/doctor_3.png" alt="doctor"/>
            
            </div>
            <div class="single_text">
            <div class="single_blog_text">
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

export default Home;