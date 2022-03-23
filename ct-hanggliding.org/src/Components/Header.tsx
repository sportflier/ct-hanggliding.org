import React, { useState, ReactNode } from 'react'
import './Header.scss';
import Glider from './../Assets/Images/glider.svg';
import GliderWhite from './../Assets/Images/glider-white.svg';
import Hamburger from './../Assets/Images/hamburger.svg';
import { Link } from "react-router-dom";
import {
    Menu,
    MenuItem,
    MenuButton
} from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

interface INavItemProps {
    homeIcon: ReactNode,
}

const NavItems = (props: INavItemProps) => {
    return (
        <>
            <Link to="/">
                {props.homeIcon}
            </Link>
            <Link to="/talcott">
                Talcott
            </Link>

            <div>
                <Menu menuButton={<MenuButton>Membership</MenuButton>} transition>
                    <MenuItem><Link to="/join">
                        Join
                    </Link></MenuItem>
                    <MenuItem><Link to="/officers">
                        Officers
                    </Link></MenuItem>
                    <MenuItem><Link to="/bylaws">
                        Bylaws
                    </Link></MenuItem>
                </Menu>
            </div>

            <Link to="/calendar">
                Calendar
            </Link>
            <Link to="/resources">
                Resources
            </Link>
            <Link to="/contact">
                Contact
            </Link>

        </>
    )

}

export default function Header() {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    const hamburgerClickHandler = () => {
        setMobileNavIsOpen(!mobileNavIsOpen);
    }

    const desktopHomeIcon = <picture>
        <source srcSet={GliderWhite} media="(prefers-color-scheme: dark)" />
        <img src={Glider} alt="" className='header-decoration' />
    </picture>;

    const mobileHomeIcon = <img src={GliderWhite} alt="" className='home-icon' />;

    return (

        <>
            <button className={`mobile-site-menu ${mobileNavIsOpen ? 'mobile-nav_visible' : ''}`} onClick={hamburgerClickHandler}>
                <img src={Hamburger} alt="" />
            </button>

            <header className='site-header'>
                <NavItems homeIcon={desktopHomeIcon} />
            </header>

            <div className={`mobile-nav ${mobileNavIsOpen ? 'mobile-nav_visible' : ''}`}>
                <NavItems homeIcon={mobileHomeIcon} />

            </div>

        </>
    )
}
