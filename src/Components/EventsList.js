import "./EventsList.css";
import Event from "./Events";
export default function EventsList(props) {
  return (
    <Event
      name={EventsList[0].name}
      date={EventsList[0].date}
      loc={EventsList[0].loc}
      time={EventsList[0].time}
    ></Event>
  );
}
