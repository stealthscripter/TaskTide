import "./Events.css";
import EventsDate from "./EventsDate";
export default function Event(props) {
  return (
    <div className="main-container">
      <EventsDate date={props.date}/>
      {/* Location and Name */}
      <div className="event-name__container">
        <p className="event-name__title">{props.name}</p>
        <p className="event-name__location">{props.loc}</p>
      </div>

      {/* Time div */}
      <div className="event-time__container">
        <p>From <span>{props.from}</span> to <span>{props.to}</span> </p>
      </div>
    </div>
  );
}
