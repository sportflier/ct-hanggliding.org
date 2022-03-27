import React, { useState, useEffect } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";

const ical = require('cal-parser');

const localizer = momentLocalizer(moment);

// CHGA calendar on hudsonvalleyfreeflyers@gmail.com
// const icalAddress = "https://calendar.google.com/calendar/ical/ier7bd82nhrjp4k008m6qjcbm8%40group.calendar.google.com/public/basic.ics";

const defaultIcal = `
BEGIN:VCALENDAR
PRODID:-//Google Inc//Google Calendar 70.9054//EN
VERSION:2.0
CALSCALE:GREGORIAN
METHOD:PUBLISH
X-WR-CALNAME:CHGA
X-WR-TIMEZONE:America/New_York
X-WR-CALDESC:Calendar for ct-hanggliding.com
BEGIN:VTIMEZONE
TZID:America/New_York
X-LIC-LOCATION:America/New_York
BEGIN:DAYLIGHT
TZOFFSETFROM:-0500
TZOFFSETTO:-0400
TZNAME:EDT
DTSTART:19700308T020000
RRULE:FREQ=YEARLY;BYMONTH=3;BYDAY=2SU
END:DAYLIGHT
BEGIN:STANDARD
TZOFFSETFROM:-0400
TZOFFSETTO:-0500
TZNAME:EST
DTSTART:19701101T020000
RRULE:FREQ=YEARLY;BYMONTH=11;BYDAY=1SU
END:STANDARD
END:VTIMEZONE
BEGIN:VEVENT
DTSTART;TZID=America/New_York:20220405T200000
DTEND;TZID=America/New_York:20220405T210000
RRULE:FREQ=MONTHLY;BYDAY=1TU
DTSTAMP:20220327T205859Z
UID:4r6u0mqo1pmajsisot1hltehq4@google.com
CREATED:20220327T194452Z
DESCRIPTION:
LAST-MODIFIED:20220327T194452Z
LOCATION:George's Pizza & Restaurant, 9 School St, Unionville, CT 06085, USA
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:CHGA Monthly Meeting
TRANSP:OPAQUE
END:VEVENT
BEGIN:VEVENT
DTSTART;TZID=America/New_York:20220405T190000
DTEND;TZID=America/New_York:20220405T200000
RRULE:FREQ=MONTHLY;BYDAY=1TU
DTSTAMP:20220327T205859Z
UID:34gntfbk1f9gvescmurm8ge881@google.com
CREATED:20220327T194354Z
DESCRIPTION:
LAST-MODIFIED:20220327T194354Z
LOCATION:George's Pizza & Restaurant, 9 School St, Unionville, CT 06085, USA
SEQUENCE:0
STATUS:CONFIRMED
SUMMARY:CHGA Monthly Dinner
TRANSP:OPAQUE
END:VEVENT
END:VCALENDAR
    
`

const parseIcal = (icalText: string) => {
    let parsedCal = ical.parseString(icalText);

    console.log(parsedCal.events);

    let calEvents = [];

    for (let i = 0; i < parsedCal.events.length; i++) {
        const evt = parsedCal.events[i];
        calEvents.push({ start: evt.dtstart, end: evt.dtend, title: evt.summary });
    }

    return calEvents;
}

// const defaultEvents = [
//     { start: new Date(), end: new Date(), title: "special event" }
// ];

export default function ChgaCalendar() {

    var parsedCal = parseIcal(defaultIcal);
    console.log(parsedCal);

    const [calEvents, setCalEvents] = useState(parsedCal);

    // useEffect(() => {
    //     // const requestInit: RequestInit = {
    //     //     // method: 'GET', headers: { 'Content-Type': 'application/json' }, mode: 'no-cors', cache: 'default'
    //     //     // method: 'GET', headers: { 'Content-Type': 'text/calendar' }, mode: 'no-cors', cache: 'default'
    //     //     method: 'GET', mode: 'no-cors'
    //     // };
    //     // fetch(icalAddress, requestInit)
    //     //     .then((res) => res.status)
    //     //     .then((response) => {
    //     //         console.log(response);
    //     //     });
    //     var parsedCal = parseIcal(defaultIcal);
    //     setCalEvents(parsedCal);
    // }, []);

    return (
        <Calendar
            localizer={localizer}
            events={calEvents}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500 }}
        />
    );
}