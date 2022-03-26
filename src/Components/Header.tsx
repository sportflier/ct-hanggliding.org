import React, { useState, ReactNode } from 'react'
import './Header.scss';
import Glider from './../Assets/Images/glider.svg';
import GliderWhite from './../Assets/Images/glider-white.svg';
import HamburgerIcon from './../Assets/Images/hamburger.svg';
import Hamburger from './Hamburger';
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
    onNavClick: any
}

const NavItems = (props: INavItemProps) => {
    return (
        <>
            <Link to="/" onClick={props.onNavClick}>
                {props.homeIcon}
            </Link>
            <Link to="/talcott" onClick={props.onNavClick}>
                Talcott
            </Link>

            <div>
                <Menu menuButton={<MenuButton>Membership</MenuButton>} transition>
                    <MenuItem><Link to="/join" onClick={props.onNavClick}>
                        Join
                    </Link></MenuItem>
                    <MenuItem><Link to="/officers" onClick={props.onNavClick}>
                        Officers
                    </Link></MenuItem>
                    <MenuItem><Link to="/bylaws" onClick={props.onNavClick}>
                        Bylaws
                    </Link></MenuItem>
                </Menu>
            </div>

            <Link to="/calendar" onClick={props.onNavClick}>
                Calendar
            </Link>
            <Link to="/resources" onClick={props.onNavClick}>
                Resources
            </Link>
            <Link to="/contact" onClick={props.onNavClick}>
                Contact
            </Link>

        </>
    )

}

export default function Header() {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    const mobileNavClickHandler = () => {
        setMobileNavIsOpen(!mobileNavIsOpen);
    }

    const desktopHomeIcon = <picture>
        <source srcSet={GliderWhite} media="(prefers-color-scheme: dark)" />
        <img src={Glider} alt="" className='header-decoration' />
    </picture>;

    const mobileHomeIcon = <img src={GliderWhite} alt="" className='home-icon' />;

    return (

        <>
            <button className={`mobile-site-menu ${mobileNavIsOpen ? 'mobile-nav_visible' : ''}`} onClick={mobileNavClickHandler}>
                {/* <img src={HamburgerIcon} alt="" /> */}
                <Hamburger />
            </button>

            <header className='site-header'>
                <NavItems homeIcon={desktopHomeIcon} onNavClick={null} />
            </header>

            <div className={`mobile-nav ${mobileNavIsOpen ? 'mobile-nav_visible' : ''}`}>
                <NavItems homeIcon={mobileHomeIcon} onNavClick={mobileNavClickHandler} />

            </div>

        </>
    )
}
