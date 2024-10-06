import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure you have Bootstrap CSS

export const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);
  const [visibleDays, setVisibleDays] = useState(5); // Number of visible days at a time
  const [slideIndex, setSlideIndex] = useState(0);
  const calendarRef = useRef(null);

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  useEffect(() => {
    renderDays();
  }, [currentDate]);

  const renderDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const totalDays = new Date(year, month + 1, 0).getDate();
    let daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);

    setDaysInMonth(daysArray);
    setSlideIndex(0);
  };

  const handleSlide = (direction) => {
    setSlideIndex((prev) => prev + direction);
  };

  return (
    <div className="calendar-container">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</h4>
        <div>
          <img 
            width="20" height="20" 
            src="https://img.icons8.com/ios-filled/50/back.png" 
            alt="back"
            onClick={() => handleSlide(-1)}
            style={{ cursor: 'pointer', marginRight: '10px' }}
          />
          <img 
            width="20" height="20" 
            src="https://img.icons8.com/ios-filled/50/forward--v1.png" 
            alt="forward"
            onClick={() => handleSlide(1)}
            style={{ cursor: 'pointer' }}
          />
        </div>
      </div>
      
      <div className="calendar-slider" ref={calendarRef}>
        <div 
          className="calendar-dates"
          style={{
            transform: `translateX(-${slideIndex * (100 / visibleDays)}%)`,
            transition: 'transform 0.5s ease-in-out',
            display: 'flex', // Ensure days are displayed in a row
          }}
        >
          {daysInMonth.map((day) => {
            const date = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            const dayName = dayNames[date.getDay()]; // Get the day name

            return (
              <div 
                className="day card text-center m-2" 
                key={day}
                style={{
                  backgroundColor: day === currentDate.getDate() ? 'black' : 'white', // Highlight today's date
                  color: day === currentDate.getDate() ? 'white' : 'black', // Text color for today's date
                  width: '200px', // Width of each day card
                  height: '70px', // Height of each day card
                  padding: '10px', // Padding inside the card
                  borderRadius: '8px', // Rounded corners for the card
                  boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)' // Shadow effect for card
                }}
              >
                <div className="day-name">{dayName}</div> {/* Display day of the week */}
                <div className="day-number">{day}</div> {/* Display day number */}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Calendar;
