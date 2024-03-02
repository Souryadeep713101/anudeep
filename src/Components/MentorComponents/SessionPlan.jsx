import React, { useState ,useContext } from "react";
import { Label , Select } from "flowbite-react";
import UserContext from '../../Context/UserContext';
import axios from "axios";
import { toast } from 'react-toastify';

export default function SessionPlan() {
  const [formData ,setFormData] = useState({}) 
  const {userDetails :{token}} =  useContext(UserContext)
 const [academicScheduleDates ,  setAcademicScheduleDates] = useState([])
 const [selectedDate ,setSeleectedDate] = useState("")
 const getAcademicScheduleDateURL = process.env.REACT_APP_ANUDEEP_GET_ACADEMIC_SCHEDULE_DATE
 const submitMentorResponseURL = process.env.REACT_APP_ANUDEEP_SUBMIT_MENTOR_RESPONSE
 
 useState(()=>{
   const fetchAcademicScheduleDateDetails = async()=>{
    const {data : {schedule_date}} = await axios.get(getAcademicScheduleDateURL, {
      headers: {
        'Accept': '*/*',
        'Authorization': `Bearer ${token}`,
        'X-CSRF-TOKEN': ''
      }
    })
    setAcademicScheduleDates(schedule_date)
   }

   fetchAcademicScheduleDateDetails()
 } , [token , getAcademicScheduleDateURL])

const onInputChange = (e)=>{
  setFormData((prevFormData)=>{
    return {...prevFormData , [e.target.name] : e.target.value}
  })
}


const handleSubmit = async (e) => {
  e.preventDefault();
   try{
    const data = { schedule_date : selectedDate, mentor_response_data : formData , type : "session" }
    axios.post(submitMentorResponseURL, data, {
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/x-www-form-urlencoded',
        'X-CSRF-TOKEN': ''
      }
    })
     
    toast.success('🦄 Successfull Submission Of Session Plan!!');
    e.target.reset();
    setFormData({});
    setSeleectedDate("")

   }
   catch(e) {
    toast.error('UnSuccessfull Submission Of Session Plan');
   }
 
};


  return (

    <div>
<div className="max-w-md min-w-60 mx-auto w-4/5 h-4/5 backdrop-blur-[5px] bg-[rgba(255,255,255,0.1)] rounded-lg shadow-2xl">
        <form class="max-w-md mx-auto p-6 md:p-10 " onSubmit={handleSubmit}>
        <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="academic-schedule-dates" value="Select Academic Schedule Date" />
      </div>
      <Select required onChange = {(e)=>{setSeleectedDate(e.target.value)}}>
        {academicScheduleDates.map((date)=>{
               return <option value={date}>{date}</option>
        })}
        
        
      </Select>
    </div>




          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="session_title"
              id="session_title"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-teal-400 focus:border-teal-400 peer"
              placeholder=""
             
              onInput={onInputChange}
              required
            />
            <label
              for="session_title"
              class="peer-hover:font-medium peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-hover:start-0 peer-focus:start-0 rtl:peer-hover:translate-x-1/4 rtl:peer-focus:translate-x-1/4 rtl:peer-hover:left-auto rtl:peer-focus:left-auto peer-hover:text-teal-400 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-hover:scale-75 peer-hover:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session Title
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="session_description"
              id="session-description"
              class="block py-2.5 px-0 w-full h-24 resize-none text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-teal-400 focus:border-teal-400 peer"
              placeholder=" "
              
              onInput={onInputChange}
              required
            />
            <label
              for="session-description"
              class="peer-hover:font-medium peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-hover:start-0 peer-focus:start-0 rtl:peer-hover:translate-x-1/4 rtl:peer-focus:translate-x-1/4 rtl:peer-hover:left-auto rtl:peer-focus:left-auto peer-hover:text-teal-400 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-hover:scale-75 peer-hover:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session Description
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="session_summary"
              id="session-summary"
              class="block py-2.5 px-0 w-full h-24 resize-none text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-teal-400 focus:border-teal-400 peer"
              placeholder=" "
              
              onInput={onInputChange}
              required
            />
            <label
              for="session-summary"
              class="peer-hover:font-medium peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-hover:start-0 peer-focus:start-0 rtl:peer-hover:translate-x-1/4 rtl:peer-focus:translate-x-1/4 rtl:peer-hover:left-auto rtl:peer-focus:left-auto peer-hover:text-teal-400 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-hover:scale-75 peer-hover:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session Summary
            </label>
          </div>

          <button
            type="submit"
            className="mt-4 text-white bg-teal-400 hover:bg-teal-500 focus:outline-none font-medium rounded-lg text-sm self-center w-auto px-5 py-2.5 text-center dark:bg-teal-400 dark:hover:bg-teal-500 duration-200 focus:shadow-inner hover:shadow-inner"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
