import "./EventsForm.css";
export default function EventsForm() {
  const date = new Date();
  let month = date.getMonth() + "";
  const day = date.getDate();
  const year = date.getFullYear();
  if (month.length < 2) {
    month = "0" + date.getMonth();
  }
  const minDate = `${year}-${month}-${day}`;
  
  const submitHandler = (e) =>{
        e.preventDefault();
  }

  return (
    <div>
      <form onSubmit={submitHandler} className="form-container">
        <div className="event-form__name">
          <label for="name">Event Name</label>
          <input type="text" id="name" />
        </div>
        <div className="event-form__loc">
          <label for="loc">Event Location</label> <input type="text" id="loc" />
        </div>
        <div className="event-form__date">
          {" "}
          <label>Date</label> <input type="date" min={minDate}></input>{" "}
        </div>
        <div className="event-form__time">
          <label>From</label> <input type="number"></input> <label>to</label>{" "}
          <input type="number"></input>
        </div>
        <button type="submit">Add Event</button>
      </form>
    </div>
  );
}
