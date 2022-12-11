import React from 'react';
import './Header.css';
import logo from '../../assest/images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
             <header className="header-full">
        <nav className="container navbar">
            <div className="main-logo">
                <img src={logo} alt="logo"/>
                
            </div>
            <div className="menu-item">
                <ul>
                   <Link to="/">Home</Link>   
                    <Link to="/feature">Features</Link>
                    <Link to="/about">About Us</Link>
                    <Link>Pricing</Link>
                    <Link>FAQ</Link>
                    <Link>Blog</Link>
                   <Link to="/contact"> <button className="header-btn">Contact us</button></Link>
                </ul>
            </div>
        </nav>
    </header>
        </div>
    );
};

export default Header;