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
            <span>Membership</span>
            <span>Calendar</span>
            <span>Resources</span>
            <span>Contact</span>

        </div>
    )
}
