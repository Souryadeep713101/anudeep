import React , {useState} from 'react'
import { Datepicker } from 'flowbite-react';
import CommitmentCalendar from './CommitmentCalendar';
import { toast } from 'react-toastify';

export default function MentorCommitment() {



  const [selectedDays, setSelectedDays] = useState([]);
  const [formData , setFormData] = useState({})

  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    setFormData((prevFormData)=>{ return { ...prevFormData, ["selected-days"] : [...selectedDays ,day] }})
  };


 const onChange = (e)=>{
   setFormData((prevFormData)=>{
    return {...prevFormData , [e.target.name]  : e.target.value}
   })


 } 
const onSubmit = (e)=>{
e.preventDefault();

toast.success('🦄 Commited Successfully');
console.log(formData)
e.target.reset()
setSelectedDays([])
setFormData({})

}


  return (
<div className='flex items-center justify-between w-full h-full flex-col justify-around'>  
<form className='flex flex-col align-center justify-between w-1/2  p-10 border bg-white border border-gray-200 rounded-lg shadow-lg' onSubmit={onSubmit}>


<div className='input-container'>
<label htmlFor="select-programme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Programme</label>
<select  onChange = {onChange}name="select-programme" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required>
<option value="NULL">Select A Programme</option>
  <option value="Java">Java</option>
  <option value="C++">C++</option>
  <option value="Python">Python</option>
  <option value="React">React</option>
</select>
</div>
<div className='input-container'><label htmlFor="programme-tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programme Tenure</label>
<select   onChange = {onChange} required name="programme-tenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
<option value="NULL">Select Tenure</option>
  <option value="1year">1year</option>
  <option value="2year">2year</option>
  <option value="3year">3year</option>
  <option value="4year">4year</option>
</select>
</div>
<div className='input-container'>
<label htmlFor="programme-tenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Start Date</label>  
<Datepicker onSelectedDateChanged={(date)=>{
  setFormData((prevFormData)=>{
    return {...prevFormData , ["start-date"] : date }
  })
}}  required/>
</div>
<div className='flex justify-between input-container'>
  <div >
  <label htmlFor="time-input-start" className="block text-sm font-medium text-gray-700 w-full">Start Time</label>
  <input
  onChange={onChange}
  required
    type="time"
    id="time-input"
    name="time-input-start"
    className="mt-1 p-2.5 border rounded-md w-full focus:outline-none focus:ring focus:border-blue-300"
  />
</div>
<div >
<label htmlFor="time-input" className="block text-sm font-medium text-gray-700">End Time</label>
  <input
  onChange={onChange}
  required
    type="time"
    id="time-input-end"
    name="time-input-end"
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

<CommitmentCalendar/>


</div> 
  










);

}
