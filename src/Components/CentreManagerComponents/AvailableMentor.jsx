import React , {useState} from 'react'
import { Accordion } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';

export default function AvailableMentor() {
  const navigate  = useNavigate()
    const mentors = [
      {
        name: 'Mentor 1',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        days: ['Monday', 'Wednesday', 'Friday'],
        startTime: '14:00',
        endTime: '16:00',
      },
      {
        name: 'Mentor 2',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        days: ['Monday', 'Wednesday', 'Friday'],
        startTime: '14:00',
        endTime: '16:00',
      },
      {
        name: 'Mentor 3',
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        days: ['Monday', 'Wednesday', 'Friday'],
        startTime: '14:00',
        endTime: '16:00',
      }
      // Add more mentors as needed
    ];
  return  ( <Accordion>
    {mentors.map((mentor)=>{
        return <Accordion.Panel>
        <Accordion.Title>{mentor.name}</Accordion.Title>
        <Accordion.Content className='place-content-between'>
         <div className="flex justify-between md:text-large"><div>StartDate : {mentor.startDate}</div><div>End Date: {mentor.endDate}</div></div>
         {mentor.days.map((day)=>{
            return <div>{day} : {mentor.startTime} - {mentor.endTime}</div>
         })}
         
         <div className="flex justify-end"><button onClick={()=>{navigate("/")}}type="button" class="text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Assign Student</button></div>
         
        </Accordion.Content>
      </Accordion.Panel>
    })
  
}
</Accordion>
   
);
}

