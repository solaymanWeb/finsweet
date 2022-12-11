import React from 'react';
import './Inquery.css'

const Inquery = () => {
    return (
        <div>
               <div className="container">
        <div className="inquery-area">
            <div className="stellar">
                <h3>Building stellar websites for early startups</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua ut enim.</p>
            </div>
            <div className="inquery-form">
                <h3>Send inquiry</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="form">

                    <input type="text" placeholder="Your Name"/>
                    <input type="email" placeholder="Email"/>
                    <input type="url" placeholder="Paste your Figma design URL"/>

                    <button>Send an Inquiry</button>
                </div>
                <a href="#">Get in touch with us <i className="fa-solid fa-arrow-right-long"></i> </a>
            </div>
        </div>
    </div>
        </div>
    );
};

export default Inquery;