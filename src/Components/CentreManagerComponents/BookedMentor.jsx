import React , {useState} from 'react'
import { Accordion,AccordionContent,Button , Modal } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Label} from 'flowbite-react';


export default function BookedMentor() {
  const navigate  = useNavigate()
  const [openModal, setOpenModal] = useState(false);
  const [email, setEmail] = useState('');

  function onCloseModal() {
    setOpenModal(false);
    setEmail('');
  }
    const mentors = [
      {
        name: 'Debkumar Das',
        subject : "Advanced Java",
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        days: ['Monday', 'Wednesday', 'Friday'],
        startTime: '14:00',
        endTime: '16:00',
      },
      {
        name: 'Bipasha Chatterjee',
        subject : "Advanced Python",
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        days: ['Monday', 'Wednesday', 'Friday'],
        startTime: '14:00',
        endTime: '16:00',
      },
      {
        name: 'Nilanjan Byabrata',
        subject : "Advanced C#",
        startDate: '2024-01-01',
        endDate: '2024-12-31',
        days: ['Monday', 'Wednesday', 'Friday'],
        startTime: '14:00',
        endTime: '16:00',
      }
      // Add more mentors as needed
    ];

    

  const students = ["Souryadeep Das" , "Anshuman Gupta" , "Debasish Mallick" , "Allankriti Mallick"]
  return  ( <><div className="flex justify-center"><h1 class="text-3xl text-red-500 mb-4 font-extrabold">Booked Mentor</h1></div><Accordion className='shadow-lg'>
    {mentors.map((mentor)=>{
        return <Accordion.Panel>
        <Accordion.Title>{mentor.name} -  {mentor.subject}</Accordion.Title>
        <Accordion.Content className='place-content-between'>
         <div className="flex justify-between md:text-large"><div><span className='text-green-600 text-lg font-bold'>Start Date</span> : <span className='text-xs font-extrabold text-red-500'>{mentor.startDate}</span></div><div><span className='text-green-600 text-lg font-bold'>End Date :</span> <span className='text-xs font-extrabold text-red-500'>{mentor.endDate}</span></div></div>
         {mentor.days.map((day)=>{
            return <div><span className='text-green-600 text-lg font-bold'>{day}  : </span>  <span className='text-xs font-extrabold text-red-500'>{mentor.startTime} - {mentor.endTime}</span></div>
         })}
         
      <div className="flex flex-col items-center">
      <a href="#" class="font-medium text-lg text-blue-600 dark:text-blue-500 hover:underline">Students List</a>
      <ul class="max-w-md space-y-1 text-gray-500 list-inside dark:text-gray-400">
   
    {students.map((student)=>{
           return <li class="flex items-center">
           <svg class="w-4 h-4 me-2 text-yellow-6000  dark:text-green-400 flex-shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
               <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z"/>
            </svg>
           <span className='text-green-900 text-sm font-bold'>{student}</span>
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

