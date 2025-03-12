import React from "react";
import IconFB from './../Assets/Images/social-facebook.svg';
import IconEmail from './../Assets/Images/social-email.svg';
import IconWhatsapp from './../Assets/Images/social-whatsapp.svg';
import './Footer.scss';


export default function Footer() {
    return (
        <footer className="site-footer">

            <a href="https://www.facebook.com/groups/364265017973" title="Visit our Facebook page" target="_blank" rel="noreferrer">
                <img src={IconFB} alt="FaceBook" />
            </a>
            <a href="https://chat.whatsapp.com/CNI43dAUEaw0aW4aMTDGFQ" title="Join our WhatsApp channel" target="_blank" rel="noreferrer">
                <img src={IconWhatsapp} alt="WhatsApp" />
            </a>
            <a href="https://groups.io/g/HangGlideConnecticut" title="Join our message group" target="_blank" rel="noreferrer">
                <img src={IconEmail} alt="Email" />
            </a>
        </footer>
    )
}
