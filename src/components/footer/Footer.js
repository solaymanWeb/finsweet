import React from 'react';
import './Footer.css'
import logo from "../../assest/images/logo.png"

const Footer = () => {
    return (
        <div>
                <section class="footer-fluid">
        <div class="container">
            <div class="footer-top">
                <div class="footer-top-logo">
                    <img src={logo} alt="logo"/>
                    <p>We are always open to discuss your project and improve your online presence.</p>
                    <div class="footer-contact">
                        <div class="email-me">
                            <h5>Email me at</h5>
                            <p>contact@website.com</p>
                        </div>
                        <div class="coll-me">
                            <h5>Call us</h5>
                            <p>0927 6277 28525</p>
                        </div>
                    </div>
                </div>
                <div class="footer-top-text">
                    <h3>Lets Talk!</h3>
                    <p>We are always open to discuss your project, improve your online presence and help with your UX/UI
                        design challenges.</p>
                    <div class="social-icon">
                        <a href="#"><i class="fa-brands fa-facebook"></i></a>
                        <a href="#"><i class="fa-brands fa-twitter"></i></a>
                        <a href="#"><i class="fa-brands fa-instagram"></i></a>
                        <a href="#"><i class="fa-brands fa-linkedin"></i></a>

                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    );
};

export default Footer;