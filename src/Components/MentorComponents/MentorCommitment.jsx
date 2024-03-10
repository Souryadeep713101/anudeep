import React , {useState ,useEffect , useContext} from 'react'
import { Datepicker } from 'flowbite-react';
import { toast } from 'react-toastify';
import axios from 'axios';
import UserContext from '../../Context/UserContext';
import ProgrammeContext from '../../Context/PorgrammeContext';

function updateTimeInputMin() {
  const startTimeInput = document.getElementById("time-input");
  const endTimeInput = document.getElementById("time-input-end");

  // Get the value of the start time input
  const startTimeValue = startTimeInput.value;

  // Calculate the minimum end time by adding 1 hour to the start time
  const [startHour, startMinute] = startTimeValue.split(":").map(Number);
  let endHour = startHour + 1;
  let endMinute = startMinute;

  // Handle cases where endHour exceeds 24
  if (endHour >= 24) {
    endHour -= 24;
  }

  // Format the minimum end time
  const minEndTime = `${endHour.toString().padStart(2, "0")}:${endMinute.toString().padStart(2, "0")}`;

  // Set the min attribute of the end time input
  endTimeInput.setAttribute("min", minEndTime);
}






export default function MentorCommitment() {

  const mentorCommitmentURL = process.env.REACT_APP_ANUDEEP_MENTOR_COMMITMENT
  const {programmeDetails} = useContext(ProgrammeContext)
  const {userDetails} = useContext(UserContext)
  const [programmeNamesIDs , setProgrammeNamesIDs] = useState([])
  const [selectedDays, setSelectedDays] = useState([]);
  const [formData , setFormData] = useState({})
  //Fetched Programme Data
  useEffect(()=>{
    if(programmeDetails.length > 0)setProgrammeNamesIDs(programmeDetails.map((programme)=>{return [programme.programmeName , programme.id ] }))
    
    
    } , [programmeDetails])

  //Toggle Day on clicks  
  const toggleDay = (day) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter((selectedDay) => selectedDay !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
    setFormData((prevFormData)=>{ return { ...prevFormData, selectedDays : [...selectedDays ,day] }})
  };


 const onChange = (e)=>{

   
   
   setFormData((prevFormData)=>{
    return {...prevFormData , [e.target.name]  : e.target.value}
   })
   if(e.target.name === "timeStart") updateTimeInputMin(); 

 } 
//Submitted Mentor Commitments 
const onSubmit = async (e)=>{
e.preventDefault();
try{


 const {selectedProgramme , programmeTenure ,selectedDays , startDate , timeStart ,timeEnd } = formData;

  const data = {program_id : selectedProgramme  , tenure : programmeTenure
    ,start_date : startDate , start_time : timeStart , end_time : timeEnd  ,day_name : selectedDays};
   

 

await axios.post(mentorCommitmentURL ,data , 
  {
   
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization': `Bearer ${userDetails.token}`
    
   },
 })

toast.success('🦄 Commited Successfully');

  





e.target.reset()
setSelectedDays([])
setFormData({})
}
catch(e) {

  toast.error('Commitment Unsuccessfull');
}


}


  return (
<div className='flex items-center justify-between w-full h-full   flex-col'>  
<form className='flex flex-col align-center justify-between  min-w-fit w-1/2 p-10  bg-white border border-gray-200 rounded-lg shadow-lg' onSubmit={onSubmit}>


<div className='input-container'>
<label htmlFor="selectedProgramme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Programme</label>
<select   name="selectedProgramme" onInput = {onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
<option value="" disabled selected hidden>Select Programme</option>
 {programmeNamesIDs.map(programme=>{
    return  <option  key={programme[1]} value={programme[1]}>{programme[0]}</option>
 })}

</select>
</div>
<div className='input-container'><label htmlFor="programmeTenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programme Tenure(in months)</label>
<input defaultValue="1" min="1" onInput = {onChange}  type="number" required name="programmeTenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>


</div>
<div className='input-container'>
<label  className="block mb-2 text-sm font-medium text-gray-900">Start Date</label>  
<Datepicker minDate={new Date()} 
onSelectedDateChanged={(date)=>{
  setFormData((prevFormData)=>{
    return {...prevFormData , startDate : date }
  })
}}  required/>
</div>
<div className='flex flex-row justify-between input-container'>
  <div className="mb-4 md:mb-0">
    <label htmlFor="timeStart" className="block text-sm font-medium text-gray-700">Start Time</label>
    <input
      onInput={onChange}
      required
      type="time"
      id="time-input"
      name="timeStart"
      className="mt-1 p-2.5 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
  <div className="md:ml-4">
    <label htmlFor="time-input" className="block text-sm font-medium text-gray-700">End Time</label>
    <input
      onInput={onChange}
      required
      type="time"
      id="time-input-end"
      name="timeEnd"
      className="mt-1 p-2.5 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
    />
  </div>
</div>


<div>


<div className="flex flex-col items-center">
      <h2 className="text-2xl font-semibold mb-4">Select Days</h2>
      <div className="flex space-x-2">
        {['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'].map((day) => (
          <button
           type='button'
            key={day}
            onClick={() => toggleDay(day)}
            className={`lg:w-12 lg:h-12 sm:text-sm flex items-center justify-center rounded-full focus:outline-none ${
              selectedDays.includes(day) ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {day.substring(0 ,3)}
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


<small className='text-red-600 font-bold'>* Time difference between Start Time and End Time should be 1 hour</small>



</form>



</div> 
  










);

}
