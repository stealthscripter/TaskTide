import "./App.css";
import Event from "./Components/Events";
const EventsList = [
  {
    id: Math.random(),
    name: "CakeBaking",
    date: new Date(2022, 2, 23),
    time: { from: "10:00", to: "11:30" },
  },
  {
    id: Math.random(),
    name: "Art Exhibitions",
    date: new Date(2023, 7, 3),
    time: { from: "4:00", to: "6:30" },
  },
  {
    id: Math.random(),
    name: "Theater Productions",
    date: new Date(2022, 6, 12),
    time: { from: "8:00", to: "11:30" },
  },
  {
    id: Math.random(),
    name: "Movie Screenings",
    date: new Date(2021, 21, 11),
    time: { from: "7:00", to: "9:30" },
  },
];
function App() {
  return (
    <div>
      <h2>Event Tracker</h2>
      <Event></Event>
    </div>
  );
}

export default App;
