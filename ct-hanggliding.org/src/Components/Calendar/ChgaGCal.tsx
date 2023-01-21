import React from "react";
import './ChgaGCal.scss';


const ChgaGCal: React.FC = () => {

    // CHGA cal on ct.hang.gliding@gmail.com:
    const calSrc = 'd8aa8v8hc645dnkv7tiegfncik%40group.calendar.google.com'

    return (
        <>
            <iframe id='gcal' src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23e4d7c8&ctz=America%2FNew_York&src=${calSrc}&color=%2398B8FF`} frameBorder="0" scrolling="no" title="CHGA Calendar"></iframe>

        </>
    );
}

export default ChgaGCal;