import React, { useState ,useContext  , useEffect} from 'react';
import { Button ,Label , Select ,Table } from "flowbite-react";
import UserContext from '../../Context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const StudentAspiration = () => {

  // Sample data for demo purpose only
 

  const [formData, setFormData] = useState({});
  const [selectedDate ,setSelectedDate] = useState("")
  const [skillSelfEvaluationData, setSkillSelfEvaluationData] = useState([]);
  const [academicScheduleDates ,  setAcademicScheduleDates] = useState([])
  const [academics , setAcademics] = useState([])
  const getAcademicScheduleDateURL = process.env.REACT_APP_ANUDEEP_GET_ACADEMIC_SCHEDULE_DATE
  const addStudentDataURL = process.env.REACT_APP_ANUDEEP_ADD_STUDENT_DATA
  const {userDetails : {token}} = useContext(UserContext)


  useEffect(()=>{
    const fetchAcademicScheduleDateDetails = async()=>{
     const { data :  {  academic ,  schedule_date}} = await axios.get(getAcademicScheduleDateURL, {
       headers: {
         'Accept': '*/*',
         'Authorization': `Bearer ${token}`,
         'X-CSRF-TOKEN': ''
       }
     })
    
     setAcademicScheduleDates(schedule_date)
     setAcademics(academic)
    

    }
 
    fetchAcademicScheduleDateDetails()
  } , [token , getAcademicScheduleDateURL])




  const handleSkillSelfEvaluationDataUpdation = (event, id, key) => {
    if(key==="skill") {
     setSkillSelfEvaluationData((prevData) =>{
      const indexToUpdate = prevData.findIndex(obj => obj.id === id);
      
            if (indexToUpdate !== -1) {
           prevData[indexToUpdate].skill = event.target.value;
           prevData[indexToUpdate].evaluation = "";
            }
            return prevData;
     
     })
    }
    else{
       if(skillSelfEvaluationData.some((obj)=>obj.id === id && obj.skill!=="") ) {
         
           setSkillSelfEvaluationData((prevData) =>{
            const indexToUpdate = prevData.findIndex(obj => obj.id === id);
            if (indexToUpdate !== -1) {
              
              prevData[indexToUpdate].evaluation = event.target.value;
            }
            return prevData;
           })
        }
        else{
          toast.dark("Please Put Some Skill")
        }
       }
    
    
  }
  const addSkill = () => {
    const newRow = skillSelfEvaluationData.length + 1;
    const updatedData = [...skillSelfEvaluationData];
    updatedData.push({ id: newRow, skill: "", evaluation: "" });
    setSkillSelfEvaluationData(updatedData);

  }
  const deleteSkill = ()=>{
    const updatedData = [...skillSelfEvaluationData];
    updatedData.pop();
    setSkillSelfEvaluationData(updatedData);
  }
  const showSkillSelfEvaluationTableData = skillSelfEvaluationData.map((record) => {
    return (

      <tr key={record.id}>
        <td>
          <input name="skill" className='w-full' type='text'  onChange={(event) => handleSkillSelfEvaluationDataUpdation(event, record.id, "skill")}></input>
        </td>
        <td>
          <input name ="evaluation" className='w-full' type='text'  onChange={(event) => handleSkillSelfEvaluationDataUpdation(event, record.id, "selfEvaluation")}></input>
        </td>
      </tr>
    )
  })
  const onChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value }
    })
  }
  const handleFormSubmission = async (e) => {
    e.preventDefault()
    try{
      await axios.post(addStudentDataURL, {student_data : {...formData , skill : skillSelfEvaluationData}  , schedule_date : selectedDate , type : 'cariculam'}, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/x-www-form-urlencoded',
          'accept': 'application/json',
          'X-CSRF-TOKEN': ''
        }
      })
     toast.success("Succesfull Submission Of Student Aspiration")
    }
    catch(e) {
      toast.error("Unsuccessfull Submission Of Student Aspiration")
    }
   
    
    e.target.reset()
    
  }
  return (
    <div className="flex flex-row">
      <form onSubmit={handleFormSubmission} className="z-2 grow min-w-md  border-2   p-16  rounded-lg shadow-2xl">
        
      <div className="max-w-md mb-4">
      <div className="mb-2 block">
        <Label htmlFor="academic-schedule-dates" value="Select Academic Schedule Date" />
      </div>
      <Select required onChange = {(e)=>{setSelectedDate(e.target.value)}}>
        {academicScheduleDates.map((date)=>{
               return <option value={date}>{date}</option>
        })}
        
        
      </Select>
    </div>
        
        
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="studentAspiration" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="studentAspiration" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Aspiration</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">

        <div className="overflow-x-auto">
      <Table className='bg-transparent'>
        <Table.Head className='border-2 rounded border-blue-300'>
          <Table.HeadCell>Qualification Name</Table.HeadCell>
          <Table.HeadCell>Percentage/Marks</Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {academics?.map((qualification)=> {
              const [key] = Object.keys(qualification)
              return <Table.Row>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                {key}
              </Table.Cell>
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900">
                 {qualification[key]}
                </Table.Cell>
             </Table.Row>
          })
        }
          
          
        </Table.Body>
      </Table>
    </div>

        </div>
        <div className="flex flex-col">
          Skill I need to have
          <table>
            <tr>
              <th>Skill</th>
              <th>Self-Evaluation(10)</th>
            </tr>
            {showSkillSelfEvaluationTableData}
          </table>
          <div className='flex justify-end'>
            <button type='button' onClick={addSkill}>
              <svg class="w-[43px] h-[43px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clip-rule="evenodd" />
              </svg>
           </button>
           <button type='button' onClick={deleteSkill}>
           <svg  class="w-[43px] h-[43px] text-gray-800 dark:text-white" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path opacity="0.5" d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" fill="#1C274C"/>
<path d="M15.75 12C15.75 12.4142 15.4142 12.75 15 12.75H9C8.58579 12.75 8.25 12.4142 8.25 12C8.25 11.5858 8.58579 11.25 9 11.25H15C15.4142 11.25 15.75 11.5858 15.75 12Z" fill="#1C274C"/>
</svg>
           </button>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="studentDoubtConcern" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="studetnDoubtConcern" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Doubt and Concerns</label>
        </div>
        <div className="flex justify-end mt-4"><Button gradientDuoTone="purpleToBlue" className="p-1" type="submit">Submit</Button></div>
      </form>
    </div>
  )
}

export default StudentAspiration
