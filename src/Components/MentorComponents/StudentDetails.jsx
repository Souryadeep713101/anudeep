import React, { useState  , useContext ,useEffect} from "react";
import { Label, Select} from "flowbite-react";
import { Accordion } from 'flowbite-react';
import MentorResponseStudent from "./MentorResponseStudent";
import UserContext from "../../Context/UserContext";
import axios from "axios";
import Spinner from "../Spinner";
export default function StudentDetails() {
  // sample data
 
  const [loading , setLoading] = useState(false)
  const [studentData,setStudentData]= useState([])
  const {userDetails :{token}} =  useContext(UserContext)
  const [selectedDate ,  setSelectedDate]  = useState("")
  const [responsePendingDates , setResponsePendingDates] = useState([])
  const [allStudents ,setAllStudents] = useState([])
  const getResponsePendingDateURL = process.env.REACT_APP_ANUDEEP_GET_RESPONSE_PENDING_DATE
  const getResponsePendingDataDateWise = process.env.REACT_APP_ANUDEEP_GET_RESPONSE_PENDING_DATA_DATEWISE
  useEffect(()=>{
    const fetchResponsePendingDates= async()=>{
     const {data : {schedule_date}} = await axios.get(getResponsePendingDateURL, {
       headers: {
         'Accept': '*/*',
         'Authorization': `Bearer ${token}`,
         'X-CSRF-TOKEN': ''
       }
     })
     setResponsePendingDates(schedule_date)
    }
 
    fetchResponsePendingDates()
  } , [token , getResponsePendingDateURL])


  const handleSearch = (e) => {
     
    const regex = new RegExp(e.target.value.trim(), 'i');
    setStudentData( allStudents.filter(({student_name})=>regex.test(student_name)))
  }
  


const onChange = async (e)=>{
 
  setSelectedDate(e.target.value)
  setLoading(true)
  const {data : {students}}  =  await axios.get(`${getResponsePendingDataDateWise}${e.target.value}`, {
    headers : {'accept': '*/*',
    'Authorization': `Bearer ${token}`,
    'X-CSRF-TOKEN': ''
}})
setLoading(false)
setAllStudents(students) 
setStudentData(students) 

}









  return (
    loading ?<Spinner /> :  <div className="flex flex-col">
       <div className="max-w-md mx-auto mb-4">
      <div className="mb-2 block">
        <Label htmlFor="academic-schedule-dates" value="Select Academic Schedule Date" />
      </div>
      <Select required onChange = {onChange}>
        {responsePendingDates.map((date)=>{
               return <option value={date}>{date}</option>
        })}
        
        
      </Select>
    </div>
      <div className="mb-5">
      
       
        <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input onInput = {handleSearch} type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
           
          </div>
  
      </div>

      <Accordion className='shadow-lg'>
        {studentData.map((student) => {
           return <Accordion.Panel>
           <Accordion.Title>{student.student_name}</Accordion.Title>
           <Accordion.Content className='place-content-between'>
             <MentorResponseStudent student = {student} selectedDate = {selectedDate}/>
           </Accordion.Content>
         </Accordion.Panel>
        })
        }

      </Accordion>
      </div>
  );
}
