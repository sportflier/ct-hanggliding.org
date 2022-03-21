import React from "react";
import IconFB from './../Assets/Images/social-facebook.svg';
import IconDiscord from './../Assets/Images/social-discord.svg';
import IconEmail from './../Assets/Images/social-email.svg';



export default function Footer() {
    return (
        <footer className="footer">

            <a href="https://www.facebook.com/groups/364265017973">
                <img src={IconFB} alt="FaceBook" />
            </a>
            <a href="https://discord.gg/MVzXN237FS">
                <img src={IconDiscord} alt="Discord" />
            </a>
            <a href="https://groups.io/g/HangGlideConnecticut">
                <img src={IconEmail} alt="Email" />
            </a>
        </footer>
    )
}
