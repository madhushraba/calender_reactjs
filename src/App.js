import React, { useState } from "react";
import "./App.css";

const Calendar = () => {
  // Set the initial date to the current date
  const [date, setDate] = useState(new Date());

  // Get the days of the week as an array
  const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  // Get the days in the current month as an array
  const getDaysInMonth = () => {
    const month = date.getMonth();
    const year = date.getFullYear();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const days = [];

    for (let i = 1; i <= daysInMonth; i++) {
      days.push(new Date(year, month, i));
    }

    return days;
  };

  // Render the calendar
  return (
    <div className="calendar">
      <div className="calendar-header">
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() - 1))}>
          Prev
        </button>
        <h2>{date.toLocaleString("default", { month: "long", year: "numeric" })}</h2>
        <button onClick={() => setDate(new Date(date.getFullYear(), date.getMonth() + 1))}>
          Next
        </button>
      </div>
      <div className="calendar-grid">
        {daysOfWeek.map((dayOfWeek) => (
          <div key={dayOfWeek} className="calendar-day-of-week">
            {dayOfWeek}
          </div>
        ))}
        {getDaysInMonth().map((day) => (
          <div key={day.getTime()} className="calendar-day">
            {day.getDate()}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
