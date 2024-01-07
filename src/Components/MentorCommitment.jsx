import React , {useState} from 'react'
import { Datepicker } from 'flowbite-react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../HighlightedCalendar.css'

export default function MentorCommitment() {


  const [activeStartDate ,  setActiveStartDate] = useState(new Date())
const highlightedDays = [
  { day: 1, time: '10:00 AM to 12:00 PM' }, // Monday
  { day: 5, time: '10 AM to 12 PM' }, // Friday
];

const tileClassName = ({ date }) => {
  return (date.getDay() === 1 || date.getDay() === 5) ? 'highlighted-date' : '';
};
const tileContent = ({ date }) => {
  const dayInfo = highlightedDays.find(day => date.getDay() === day.day);
  return dayInfo ? <div className="highlighted-content">{dayInfo.time}</div> : null;
};
// const onChange = ({date})=>{
// console.log("Calendar Changed")
// if(date > new Date("30-01-2024")) console.log("No Data for the next month")
// }

const maxAllowedDate = new Date('2024 , 01 , 30')
const handleActiveStartDateChange = ({ activeStartDate }) => {
  if (activeStartDate > maxAllowedDate) {
    setActiveStartDate(maxAllowedDate);
    // Optionally, you can show a message or take other actions
    console.warn('Reached the maximum allowed date');
  } else {
    setActiveStartDate(activeStartDate);
  }
};

  const [selectedDays, setSelectedDays] = useState([]);

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };
const onSubmit = (e)=>{
e.preventDefault();
console.log("Form Submitted")
}


  return (
<div className='flex justify-center w-screen h-full flex-col justify-around'>  
<form className='flex flex-col align-center justify-between w-1/2  p-10 border bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700' onSubmit={onSubmit}>


<div>
<label htmlFor="select-programme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Programme</label>
<select name="select-programme" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="Java">Java</option>
  <option value="C++">C++</option>
  <option value="Python">Python</option>
  <option value="React">React</option>
</select>
</div>
<div><label htmlFor="programme-tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programme Tenure</label>
<select name="programme-tenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
  <option value="1year">1year</option>
  <option value="2year">2year</option>
  <option value="3year">3year</option>
  <option value="4year">4year</option>
</select>
</div>
<div>
<label htmlFor="programme-tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>  
<Datepicker/>
</div>
<div className='flex justify-between'>
  <div >
  <label htmlFor="time-input" className="block text-sm font-medium text-gray-700">Start Time</label>
  <input
    type="time"
    id="time-input"
    name="time-input"
    className="mt-1 p-2.5 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
  />
</div>
<div >
<label htmlFor="time-input" className="block text-sm font-medium text-gray-700">End Time</label>
  <input
    type="time"
    id="time-input"
    name="time-input"
    className="mt-1 p-2.5 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
  />
 </div> 
</div>

<div>


<div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Select Days</h2>
      <div className="flex space-x-2">
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <button
           type='button'
            key={day}
            onClick={() => toggleDay(day)}
            className={`w-12 h-12 flex items-center justify-center rounded-full focus:outline-none ${
              selectedDays.includes(day) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
      <div className="mt-4">
        <p>Selected Days: {selectedDays.join(', ') || 'None'}</p>
      </div>
    </div>


</div>


<div className="flex justify-end">
<button type="submit" className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Commit</button>
</div>






</form>



<div className="cal-container">
      <div className="cal-header">
        <h2>Booked Dates</h2>
      </div>
    <Calendar
      onActiveStartDateChange={(args) => {
        handleActiveStartDateChange(args)
      }} 
      tileClassName={tileClassName}
      tileContent= {tileContent}
      readOnly = {true}
      value={activeStartDate}
      maxDate={maxAllowedDate}
    />
  </div>
</div> 
  










);

}
