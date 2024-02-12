import "./App.css";
import EventsList from "./Components/UI/EventsList";
import EventsForm from "./Components/Form/EventsForm";
const EventsDatas = [
  {
    id: Math.random(),
    name: "CakeBaking",
    date: new Date(2022, 2, 23),
    loc: "Home",
    time: { from: "10:00", to: "11:30" },
  },
  {
    id: Math.random(),
    name: "Art Exhibitions",
    date: new Date(2023, 7, 3),
    loc: "LA Burtan St",
    time: { from: "4:00", to: "6:30" },
  },
  {
    id: Math.random(),
    name: "Theater Productions",
    date: new Date(2022, 6, 12),
    loc: "National Theater",
    time: { from: "8:00", to: "11:30" },
  },
  {
    id: Math.random(),
    name: "Movie Screenings",
    date: new Date(2021, 21, 11),
    loc: "Gast Cienima",
    time: { from: "7:00", to: "9:30" },
  },
];
function App() {
  return (
    <div>
      <h2>Event Tracker</h2>
      <EventsForm/>
      <EventsList EventObj = {EventsDatas} />
    </div>
  );
}

export default App;
