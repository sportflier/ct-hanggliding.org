import React from 'react'
import './Header.scss';
import Glider from './../Assets/Images/glider.svg';
import { Link } from "react-router-dom";

export default function Header() {
    return (
        <div className='site-header'>
            <Link to="/">
                <img src={Glider} alt="" className='header-decoration' />
            </Link>
            <Link to="/talcott">
                Talcott
            </Link>

            <Link to="/membership">
                Membership
            </Link>
            <Link to="/calendar">
                Calendar
            </Link>
            <Link to="/resources">
                Resources
            </Link>
            <Link to="/contact">
                Contact
            </Link>



        </div>
    )
}
