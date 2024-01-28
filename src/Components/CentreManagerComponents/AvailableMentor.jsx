import React , {useState} from 'react'
import { Accordion,AccordionContent,Button , Modal } from 'flowbite-react';
import { useNavigate } from 'react-router-dom';
import { Checkbox, Label} from 'flowbite-react';


export default function AvailableMentor() {
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
  return  ( <><div className="flex justify-center"><h1 class="text-3xl text-blue-400 mb-4 font-extrabold">Available Mentor</h1></div><Accordion className='shadow-lg'>
    {mentors.map((mentor)=>{
        return <Accordion.Panel>
        <Accordion.Title>{mentor.name} -  {mentor.subject}</Accordion.Title>
        <Accordion.Content className='place-content-between'>
         <div className="flex justify-between md:text-large"><div><span className='text-green-600 text-lg font-bold'>Start Date</span> : <span className='text-xs font-extrabold text-red-500'>{mentor.startDate}</span></div><div><span className='text-green-600 text-lg font-bold'>End Date :</span> <span className='text-xs font-extrabold text-red-500'>{mentor.endDate}</span></div></div>
         {mentor.days.map((day)=>{
            return <div><span className='text-green-600 text-lg font-bold'>{day}  : </span>  <span className='text-xs font-extrabold text-red-500'>{mentor.startTime} - {mentor.endTime}</span></div>
         })}
         
      <div className="flex justify-end"><Button onClick={() => setOpenModal(true)}>Assign Student</Button></div>
      
         
        </Accordion.Content>
      </Accordion.Panel>
    })
  
}
</Accordion>
<Modal show={openModal} size="md" onClose={onCloseModal} popup>
        <Modal.Header/>
        <Modal.Body className='h-full'>
        <Accordion >
        <Accordion.Panel>
          <Accordion.Title>Student Batch</Accordion.Title>
          <Accordion.Content> 
        { students.map((student) => {
          return<div className="flex items-center gap-2">    
        <Checkbox id="accept" defaultChecked />
        <Label htmlFor="accept" className="flex">
          {student}
        </Label>
        </div>
    
          
        
         })}
           </Accordion.Content>
          </Accordion.Panel>
     
         </Accordion>
          <div className="flex justify-end m-2"><Button type='Submit'>Submit</Button></div>
        
          </Modal.Body> 
      </Modal>
</>
);
}

