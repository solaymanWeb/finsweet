import React from 'react';
import './Banner.css'
import banner from "../../../assest/images/banner-img.png"

const Banner = () => {
    return (
        <div>
            <section className="banner-full">
                <div className="banner-area container">
                    <div className="banner-text">
                        <h1>Building stellar websites for early startups</h1>

                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        <div className="view-work">
                            <button className="header-btn"><a href="#">View our work</a></button> <span> view pricing <i
                                className="fa-solid fa-arrow-right-long"></i></span>
                        </div>
                    </div>
                    <div className="banner-img">
                        <img src={banner} alt="banner-image"/>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;