import React, { useState, ReactNode, useEffect } from 'react'
import './Header.scss';
import Glider from './../Assets/Images/glider.svg';
import GliderWhite from './../Assets/Images/glider-white.svg';
import Hamburger from './UI/Hamburger';
import { NavLink } from "react-router-dom";
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
    const activeClass = 'active-link';




    return (
        <>
            <NavLink to="/" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                {props.homeIcon}
            </NavLink>

            <div>
                <Menu menuButton={<MenuButton>Talcott</MenuButton>} transition>
                    <MenuItem href='/talcott' onClick={props.onNavClick}><NavLink to="/talcott" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                        Guide
                    </NavLink></MenuItem>
                    <MenuItem href="/map" onClick={props.onNavClick}><NavLink to="/map" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                        Map
                    </NavLink></MenuItem>
                    <MenuItem href="/weather" onClick={props.onNavClick}><NavLink to="/weather" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                        Weather
                    </NavLink></MenuItem>
                </Menu>
            </div>

            <div>
                <Menu menuButton={<MenuButton>Membership</MenuButton>} transition>
                    <MenuItem href='/join' onClick={props.onNavClick}><NavLink to="/join" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                        Join
                    </NavLink></MenuItem>
                    <MenuItem href="/officers" onClick={props.onNavClick}><NavLink to="/officers" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                        Officers
                    </NavLink></MenuItem>
                </Menu>
            </div>

            <NavLink to="/calendar" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                Calendar
            </NavLink>
            <NavLink to="/resources" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                Resources
            </NavLink>
            <NavLink to="/contact" onClick={props.onNavClick} className={(navData) => navData.isActive ? activeClass : ''}>
                Contact
            </NavLink>

        </>
    )

}

export default function Header() {

    const [mobileNavIsOpen, setMobileNavIsOpen] = useState(false);

    useEffect(() => {
        const _body = document.querySelector("body");
        if (mobileNavIsOpen) {
            _body?.classList.add("no-scrollbars");
        }
        else {
            _body?.classList.remove("no-scrollbars");
        }
    }, [mobileNavIsOpen])

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
            <button className={`mobile-site-menu ${mobileNavIsOpen ? 'mobile-nav_visible' : ''}`} onClick={mobileNavClickHandler} type="button" title='Site Menu'>
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
