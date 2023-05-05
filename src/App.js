import React, { useState } from 'react';

export default function Calendar() {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1);
  const lastDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0);
  const daysInMonth = lastDayOfMonth.getDate();
  const monthStartIndex = firstDayOfMonth.getDay();
  const monthEndIndex = lastDayOfMonth.getDay();

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  return (
    <div>
      <h2>{currentMonth.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}</h2>
      <button onClick={prevMonth}>Prev</button>
      <button onClick={nextMonth}>Next</button>
      <table>
        <thead>
          <tr>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {[...Array(Math.ceil((daysInMonth + monthStartIndex) / 7))].map((row, rowIndex) => (
            <tr key={rowIndex}>
              {[...Array(7)].map((cell, cellIndex) => {
                const day = rowIndex * 7 + cellIndex + 1 - monthStartIndex;
                return (
                  <td key={cellIndex}>
                    {day > 0 && day <= daysInMonth && <span>{day}</span>}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
