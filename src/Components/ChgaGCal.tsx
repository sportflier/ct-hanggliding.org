import React from "react";
import './ChgaGCal.scss';

// CHGA calendar on hudsonvalleyfreeflyers@gmail.com
// const icalAddress = "https://calendar.google.com/calendar/ical/ier7bd82nhrjp4k008m6qjcbm8%40group.calendar.google.com/public/basic.ics";

const ChgaGCal: React.FC = () => {
    return (
        <>
            <iframe id='gcal' src={`https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23e4d7c8&ctz=America%2FNew_York&src=aWVyN2JkODJuaHJqcDRrMDA4bTZxamNibThAZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&color=%23F4511E`} frameBorder="0" scrolling="no" title="CHGA Calendar"></iframe>

        </>
    );
}

export default ChgaGCal;