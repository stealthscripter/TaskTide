import "./EventsList.css";
import Event from "./Events";
export default function EventsList(props) {
  return (
    <div>
      <Event
        name={props.EventObj[0].name}
        loc={props.EventObj[0].loc}
        date={props.EventObj[0].date}
        from={props.EventObj[0].time.from}
        to={props.EventObj[0].time.to}
      />
      <Event
        name={props.EventObj[1].name}
        loc={props.EventObj[1].loc}
        date={props.EventObj[1].date}
        from={props.EventObj[1].time.from}
        to={props.EventObj[1].time.to}
      />
    </div>
  );
}
