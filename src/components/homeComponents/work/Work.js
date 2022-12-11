import React from 'react';
import "./Work.css"
import pointer1 from "../../../assest/images/pointer-1.png"
import pointer2 from "../../../assest/images/pointer-2.png"
import pointer3 from "../../../assest/images/pointer-3.png"
import pointer4 from "../../../assest/images/pointer-4.png"

const Work = () => {
    return (
        <div>
            <section className="services-full">
        <div className="container">
            <div className="services-area">
                <div className="work-info">
                    <h3>How we work</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                    <a href="#">Get in touch with us
                        <i className="fa-solid fa-arrow-right-long"></i></a>
                </div>
                <div className="work-categorys">
                    <div className="category">
                        <img src={pointer1} alt=""/>
                        <h5>Strategy</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className="category">
                        <img src={pointer2} alt="pointer img"/>
                        <h5>Wireframing</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className="category">
                        <img src={pointer3} alt="pointer img"/>
                        <h5>Design</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                    <div className="category">
                        <img src={pointer4} alt="pointer img"/>
                        <h5>Development</h5>
                        <p>Euismod faucibus turpis eu gravida mi. Pellentesque et velit aliquam .</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Work;