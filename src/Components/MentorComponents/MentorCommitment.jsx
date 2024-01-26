import React , {useState ,useEffect , useContext} from 'react'
import { Datepicker } from 'flowbite-react';
import CommitmentCalendar from './CommitmentCalendar';
import { toast } from 'react-toastify';
import axios from 'axios';
import ProgrammeContext from '../../Context/PorgrammeContext';

export default function MentorCommitment() {


  const {programmeDetails} = useContext(ProgrammeContext)
  const [programmeNames , setProgrammeNames] = useState([])
  const [selectedDays, setSelectedDays] = useState([]);
  const [formData , setFormData] = useState({})
  useEffect(()=>{
    if(programmeDetails.length > 0)setProgrammeNames(programmeDetails.map((programme)=>{return programme.programmeName}))
    
    
    } , [programmeDetails])
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
   if(e.target.name == "timeStart") document.getElementById("time-input-end").setAttribute("min" , e.target.value)  

 } 
const onSubmit = async (e)=>{
e.preventDefault();
try{


 console.log(formData)

 const response = await axios.post("https://ae731edf-571c-430a-b094-9cce57a25653.mock.pstmn.io/mentor/commit"  , {useId : "souryadeep123" , ...formData } )
 console.log(response.status)
toast.success('🦄 Commited Successfully');

e.target.reset()
setSelectedDays([])
setFormData({})
}
catch(e) {

}


}


  return (
<div className='flex items-center justify-between w-full h-full   flex-col justify-around'>  
<form className='flex flex-col align-center justify-between  min-w-fit w-1/2 p-10  bg-white border border-gray-200 rounded-lg shadow-lg' onSubmit={onSubmit}>


<div className='input-container'>
<label htmlFor="selectedProgramme" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select Programme</label>
<select   name="selectedProgramme" onChange = {onChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" required>
<option value="" disabled selected hidden>Select Programme</option>
 {programmeNames.map(programme=>{
    return  <option value={programme}>{programme}</option>
 })}

</select>
</div>
<div className='input-container'><label htmlFor="programmeTenure" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Programme Tenure(in months)</label>
<input defaultValue="1" min="1" onChange = {onChange}  type="number" required name="programmeTenure" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"/>


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
      onChange={onChange}
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
      onChange={onChange}
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
        {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map((day) => (
          <button
           type='button'
            key={day}
            onClick={() => toggleDay(day)}
            className={`lg:w-12 lg:h-12 sm:text-sm flex items-center justify-center rounded-full focus:outline-none ${
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



</div> 
  










);

}
