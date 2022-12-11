import React from 'react';
import "./Project.css"
import card1 from "../../../assest/images/card-1.png"
import card2 from "../../../assest/images/card-2.png"
import dashboard from "../../../assest/images/card-dashboard.png"

const Project = () => {
    return (
        <div>
             <section className="project-full">
        <div className="container">
            <div className="project-area">
                <div className="project-header">
                    <h3>View our projects</h3>
                    <a href="#">View More <i className="fa-solid fa-arrow-right-long"></i> </a>
                </div>

                <div className="project">
                    <div className="project-left">
                        <div className="left-card-img">
                            <img src={card1} alt="card img"/>
                        </div>
                        <div className="left-card-overlay">
                            <div className="left-card-overlay-text">
                                <h4>Workhub office Webflow Webflow Design</h4>
                                <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam </p>
                                <a href="#"><i className="fa-solid fa-arrow-right-long"></i> </a>
                            </div>
                        </div>

                    </div>
                    <div className="project-right">
                        <div className="top-img">
                            <img src={dashboard} alt="card img"/>
                            <div className="top-img-overlay">
                                <div className="top-img-overlay-text">
                                    <h3>Unisaas Website Design</h3>
                                    <a href="#">View portfolio <a href="#"> <i className="fa-solid fa-arrow-right-long"></i>
                                        </a></a>
                                </div>
                            </div>
                        </div>
                        <div className="bottom-img">
                            <img src={card2} alt="card img"/>
                            <div className="bottom-img-overlay">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>
        </div>
    );
};

export default Project;