import React from "react";
import IconFB from './../Assets/Images/social-facebook.svg';
import IconDiscord from './../Assets/Images/social-discord.svg';
import IconEmail from './../Assets/Images/social-email.svg';
import './Footer.scss';


export default function Footer() {
    return (
        <footer className="site-footer">

            <a href="https://www.facebook.com/groups/364265017973" title="Visit our Facebook page" target="_blank" rel="noreferrer">
                <img src={IconFB} alt="FaceBook" />
            </a>
            <a href="https://discord.gg/MVzXN237FS" title="Join our Discord server" target="_blank" rel="noreferrer">
                <img src={IconDiscord} alt="Discord" />
            </a>
            <a href="https://groups.io/g/HangGlideConnecticut" title="Join our message group" target="_blank" rel="noreferrer">
                <img src={IconEmail} alt="Email" />
            </a>
        </footer>
    )
}
