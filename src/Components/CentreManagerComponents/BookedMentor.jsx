import React , {useState , useContext , useEffect} from 'react'
import { Accordion } from 'flowbite-react';
import UserContext from '../../Context/UserContext';
import axios from 'axios';

export default function BookedMentor() {
  const [bookedMentors ,  setBookedMentors] = useState([])

  const getMentorAvailabilityURL = process.env.REACT_APP_ANUDEEP_GET_MENTOR_AVAILABILITY
  const {userDetails : {token}} = useContext(UserContext)
   useEffect(()=>{
    
  
    const fetchBookedMentors = async()=>{
      if(token!=null) {
     const {data : {schedule_details}} =  await axios.get(getMentorAvailabilityURL, {
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-TOKEN': ''
        }
      })
      setBookedMentors(schedule_details.filter((mentor)=>{
        return mentor.students.length > 0;
      }))
      
    }
    
    }
  
    fetchBookedMentors();
   }, [token , getMentorAvailabilityURL])

    


  return  ( <><div className="flex justify-center"><h1 class="text-3xl text-red-500 mb-4 font-extrabold">Booked Mentor</h1></div><Accordion className='shadow-lg'>
    {bookedMentors.map((mentor)=>{
        return <Accordion.Panel>
        <Accordion.Title>{mentor?.name} -  {mentor?.course_name}</Accordion.Title>
        <Accordion.Content className='place-content-between'>
         <div className="flex justify-between md:text-large"><div><span className='text-green-600 text-lg font-bold'>Start Date</span> : <span className='text-xs font-extrabold text-red-500'>{mentor?.start_date}</span></div><div><span className='text-green-600 text-lg font-bold'>End Date :</span> <span className='text-xs font-extrabold text-red-500'>{mentor?.end_date}</span></div></div>
         {mentor.day_name.map((day)=>{
            return <div><span className='text-green-600 text-lg font-bold'>{day}  : </span>  <span className='text-xs font-extrabold text-red-500'>{mentor?.start_time} - {mentor?.end_time}</span></div>
         })}
         
      <div className="flex flex-col items-center">
      {/* eslint-disable-next-line */}
      <a href="#" class="font-medium text-lg text-blue-600 dark:text-blue-500 hover:underline">Students List</a>
      <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
   
    {mentor.students.map((student)=>{
           return <li class="flex items-center">
           <svg class="w-4 h-4 me-2 text-yellow-6000  dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
           <span className='text-green-900 text-sm font-bold'>{student?.student_name}</span>
       </li>
    })}
    
    </ul>
      </div>
      
         
        </Accordion.Content>
      </Accordion.Panel>
    })
  
}
</Accordion>

</>
);
}

