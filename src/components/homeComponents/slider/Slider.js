import React from 'react';
import "./Slider.css"
import client from "../../../assest/images/client.png"

const Slider = () => {
    return (
        <div>
             <div className="client-slide-fluid">
        <div className="container">
            <div className="client-main">
                <div className="client-left">
                    <h3>What our clients say about us</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.</p>
                </div>
                <div className="client-right">
                    <div className="client-slider">
                        {/* <div className="client-content">
                            <h3>"The best agency we ve worked with so far. They understand our product and are able to
                                add new features with a great focus."</h3>
                            <div className="client-right-profile">
                                <div className="client-img">
                                    <img src="images/client.png" alt="client profile"/>
                                </div>
                                <div className="client-title">
                                    <h4>Jenny Wilson</h4>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div> */}

                        <div className="client-content">
                            <h3>"The best agency we ve worked with so far. They understand our product and are able to
                                add new features with a great focus."</h3>
                            <div className="client-right-profile">
                                <div className="client-img">
                                    <img src={client} alt="client profile"/>
                                </div>
                                <div className="client-title">
                                    <h4>Jenny Wilson</h4>
                                    <p>Vice President</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="slick-scroll-icon">
                        <div className="prev">
                            <i className="fa-solid fa-chevron-left"></i>
                        </div>
                        <div className="next">
                            <i className="fa-solid fa-chevron-right"></i>
                        </div>
                    </div> */}

                </div>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Slider;