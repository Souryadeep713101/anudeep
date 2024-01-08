import React  , {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../HighlightedCalendar.css'

export default function CommitmentCalendar() {
  
   
    const highlightedDays = [
      { day: 1, time: '10:00 AM to 12:00 PM' }, // Monday
      { day: 5, time: '10:00 AM to 12:00 PM' }, // Friday
    ];
    
    const tileClassName = ({ date }) => {
      if(date<=maxAllowedDate){
      return (date.getDay() === 1 || date.getDay() === 5) ? 'highlighted-date' : '';
      }
    };
    const tileContent = ({ date }) => {
      if(date<=maxAllowedDate){
      const dayInfo = highlightedDays.find(day => date.getDay() === day.day);
      return dayInfo ? <div className="highlighted-content">{dayInfo.time}</div> : null;
      }
    };
  
    
    const maxAllowedDate = new Date('2024 , 01 , 30')
    // const handleActiveStartDateChange = ({ activeStartDate }) => {
  
    //   if (activeStartDate > maxAllowedDate) {
    //     console.log("Warning Genereated")
        
       
    //     setActiveStartDate(maxAllowedDate);
      

    //   } else {
    //     setActiveStartDate(activeStartDate);
    //   }
    // };


  return (
    <div className="cal-container  p-10 shadow-xl">
    <div className="cal-header  rounded shadow-2xl relative z[2]">
      <h2>Commited Dates</h2>
    </div>
  <Calendar
    // onActiveStartDateChange={(args) => {
    //   handleActiveStartDateChange(args)
    // }} 
    tileClassName={tileClassName}
    tileContent= {tileContent}
    readOnly = {true}
  
    maxDate={maxAllowedDate}
  />




</div>
  )
}
