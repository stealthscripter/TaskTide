import React from "react";
import "./EventsDate.css";

export default function EventsDate(props) {
  const month = props.date.toLocaleString('en-US', { month: 'short' });
  var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  var d = new Date(props.date);
  var dayName = days[d.getDay()];
  let date = props.date.getDate() + '';
  const year = props.date.getFullYear();

  if(date.length < 2){
      date = '0' + props.date.getDate();
  }

  console.log(typeof(date))
  return (
    <div>
      {/* Date and Year Stuf Div */}
      <div className="event-date__container">
        <div className="event-date__month">{month}</div>
        <div className="event-date__date">{date}</div>
        <div className="event-date__day">{dayName}</div>
        <div className="event-date__year">{year}</div>
      </div>
    </div>
  );
}
