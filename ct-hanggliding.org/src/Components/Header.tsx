import React from 'react'
import './Header.scss';
import Glider from './../Assets/Images/glider.svg';

export default function Header() {
    return (
        <div className='site-header'>
            <img src={Glider} alt="" className='header-decoration' />
            <span>Talcott</span>
            <span>Membership</span>
            <span>Calendar</span>
            <span>Resources</span>
            <span>Contact</span>

        </div>
    )
}
