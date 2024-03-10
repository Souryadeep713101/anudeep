import React , {useEffect, useState , useContext} from 'react'
import { Accordion,Button , Modal } from 'flowbite-react';
import { Checkbox, Label, Select} from 'flowbite-react';
import UserContext from '../../Context/UserContext';
import axios from 'axios';
import Spinner from '../Spinner';
import { toast } from 'react-toastify';


export default function AvailableMentor() {
  
  const [openModal, setOpenModal] = useState(false);
  const[batchCodes ,setBatchCodes] = useState([])
  const [batchCode ,setBatchCode] = useState();
  const [selectedStudents ,setSelectedStudents] = useState([])
  const [mentorIdForAssigningStudent ,  steMentorIdForAssigningStudent] = useState();
  const [availableMentors ,  setAvailableMentors] = useState([])
  const [students , setStudents]  = useState([])
  const [loading ,  setLoading] = useState(false);
  const getMentorAvailabilityURL = process.env.REACT_APP_ANUDEEP_GET_MENTOR_AVAILABILITY
  const getBatchByAlias = process.env.REACT_APP_ANUDEEP_GET_BATCH_BY_ALIAS
  const getStudentByBatchURL = process.env.REACT_APP_ANUDEEP_GET_STUDENT_BY_BATCH
  const assignStudentURL = process.env.REACT_APP_ANUDEEP_ASSIGN_STUDENT
  const {userDetails : {token}} = useContext(UserContext)
   useEffect(()=>{
    
  
    const fetchAvailableMentors = async()=>{
      if(token!=null) {
     const {data : {schedule_details}} =  await axios.get(getMentorAvailabilityURL, {
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-TOKEN': ''
        }
      })
      setAvailableMentors(schedule_details.filter((mentor)=>{
        return mentor.students.length === 0;
      }))
      
    }
    
    }
  
    fetchAvailableMentors();
   }, [token , getMentorAvailabilityURL])


//Fetching Students According to Course Alias

async function fetchStudentsByBatchCode(e){
   

 try{
  const {data : {students}} = await axios.get(`${getStudentByBatchURL}/${e.target.value}`, {
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${token}`,
      'X-CSRF-TOKEN': ''
    }
  })
   setStudents(students)
   setBatchCode(e.target.value)
}
catch(e){
 
}

}


  function onCloseModal() {
    setOpenModal(false);
 
  }
   
  async function onOpenModal(mentorId) {
    const {course_alias} = availableMentors.find((mentor)=>mentor.id===mentorId) 
    const {data : {batch_codes}}  = await axios.get(`${getBatchByAlias}/${course_alias}`, {
    headers: {
    'accept': '*/*',
    'Authorization': `Bearer ${token}`,
    'X-CSRF-TOKEN': ''
  }
  })

   setBatchCodes(batch_codes)
   steMentorIdForAssigningStudent(mentorId)
   setOpenModal(true)

  }
    
//Assign Students
const assignStudents = async (e) =>{
e.preventDefault()
setLoading(true)
try{
 await axios.post(assignStudentURL ,{mentor_scheduling_id : mentorIdForAssigningStudent , batch_code : batchCode , students : selectedStudents }  , 
  {
   
   headers: {
     'Accept': 'application/json',
     'Content-Type': 'application/x-www-form-urlencoded',
     'Authorization': `Bearer ${token}`
    
   },
 })
 toast.success('🦄 Students Assigned Successfully');
setLoading(false)
}
catch(e){
  toast.error('Students Assignment Unsuccessfull');
}

}




  return  ( loading===true ?<Spinner/> : <><div className="flex justify-center"><h1 class="text-3xl text-blue-400 mb-4 font-extrabold">Available Mentor</h1></div><Accordion className='shadow-lg'>
    {availableMentors.map((mentor)=>{
        return <Accordion.Panel id={mentor?.id}>
        <Accordion.Title>{mentor?.name} -  {mentor?.course_name}</Accordion.Title>
        <Accordion.Content className='place-content-between'>
         <div className="flex justify-between md:text-large"><div><span className='text-green-600 text-lg font-bold'>Start Date</span> : <span className='text-xs font-extrabold text-red-500'>{mentor?.start_date}</span></div><div><span className='text-green-600 text-lg font-bold'>End Date :</span> <span className='text-xs font-extrabold text-red-500'>{mentor.end_date}</span></div></div>
         {mentor.day_name.map((day)=>{
            return <div><span className='text-green-600 text-lg font-bold'>{day}  : </span>  <span className='text-xs font-extrabold text-red-500'>{mentor?.start_time} - {mentor?.end_time}</span></div>
         })}
         
      <div className="flex justify-end"><Button onClick = { (e)=> onOpenModal(mentor?.id)} >Assign Student</Button></div>
      
         
        </Accordion.Content>
      </Accordion.Panel>
    })
  
}
</Accordion>
{/* For Assigning Student */}
<Modal show={openModal} size="md" onClose={onCloseModal} popup >
        <Modal.Header/>
        <Modal.Body className='h-full' >
         <form onSubmit={assignStudents}>
        <Accordion >
        <Accordion.Panel>
          <Accordion.Title>Student Batch</Accordion.Title>
          <Accordion.Content> 
          {/* Select Batch Alias */}
          <div className="max-w-md">
      <div className="mb-2 block">
        <Label className='text-yellow-400' htmlFor="batch-code" value="Select Batch Code" />
      </div>
      <Select id="batch-code" onChange={fetchStudentsByBatchCode} required>
       
       {batchCodes?.map(({batch_code})=>{
             
             return <option>{batch_code}</option>
       })  
       }
       
      </Select>
    </div>

        <div className="mt-4">{ students?.map((student) => {
         
          return<div className="flex items-center gap-2">    
        <Checkbox id="accept" value={student?.member_code} onChange={(e)=>{setSelectedStudents((prevSelectedStudents)=>{
        return [...prevSelectedStudents , e.target.value]
        })}} />
        <Label htmlFor="accept" className="flex">
          {student.first_name} {student.last_name}
        </Label>
        </div>
    
          
        
         })}
         </div>
           </Accordion.Content>
          </Accordion.Panel>
     
         </Accordion>
          <div className="flex justify-end m-2"><Button type='Submit'>Submit</Button></div>
          </form> 
          </Modal.Body> 
      </Modal>
</>
);
}

