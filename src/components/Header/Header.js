import React from "react";
import { Link } from "react-router-dom";
import './Header.css'
const Header = () => {
    return (
        <div className="header">
            <Link to="/"><img className="header__icon" src="Quiz_logo.png" alt="logo" /></Link>
            <nav role="navigation" class="primary-navigation">
            <ul>
                <li><a href="#"><div className="wrapper">
                    <a href="#" className="nav">
                        <div className="one"></div>
                        <div className="two"></div>
                        <div className="three"></div>
                    </a>
                </div></a>
                <ul class="dropdown">
                    <li><a href="https://www.linkedin.com/in/kambhampati-hemanth/" target="_blank" rel="noopener noreferrer">Profile</a></li>
                    <li><a href="#">Contact Me</a></li>
                    <li><a href="#">Logout</a></li>
                </ul>
                </li>
            </ul>
            </nav>
            </div>
    );
};

export default Header;
