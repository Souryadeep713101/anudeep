import React , {useState , useContext}  from 'react'
import {Label , Button } from 'flowbite-react'
import { toast } from 'react-toastify'
import Spinner from '../Spinner'
import axios from 'axios'
import UserContext from '../../Context/UserContext'
export default function MentorResponseStudent({student ,selectedDate}) {
 

  const {userDetails : {token}} = useContext(UserContext)
  const [loading  ,  setLoading]  = useState(false)
  const [formData ,setFormData] = useState("")
  const submitMentorResponseURL = process.env.REACT_APP_ANUDEEP_SUBMIT_MENTOR_RESPONSE
const onChange = (e) => {
    setFormData(e.target.value)
  }
 
 
 const onSubmit = async(e) =>{
 e.preventDefault()

 try{

  setLoading(true)
  await axios.post(submitMentorResponseURL,  { schedule_date : selectedDate , student_code: student.student_code ,
    mentor_response_data : formData ,   type : "response"}, {headers : {
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
      'Authorization': `Bearer ${token}`,
      'X-CSRF-TOKEN': ''
  }})
   
  toast.success("Successfully Submited Response")
 }
 catch(e)
 {
 
  toast.error("Unable to Submit response")
 }
 finally{
  setLoading(false)
  setFormData("")
  e.target.reset()
 }
 }
 
  return (
    loading? <Spinner /> :
    <form onSubmit = {onSubmit} className="max-w-md mx-auto">
               <div className="mb-2 block">
                 <Label htmlFor="academic-schedule-dates" value="Select Academic Schedule Date" />
               </div>
               {/* <Select required onChange={(e) => { setSeleectedDate(e.target.value) }}>
                 {academicScheduleDates.map((date) => {
                   return <option value={date}>{date}</option>
                 })}
               </Select> */}
               <table className="min-w-full divide-y divide-gray-200">
                 <tbody className="divide-y divide-gray-200">
                   <tr>
                     <th className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">Student Name</div>
                     </th>
                     <td className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">{student.student_name}</div>
                     </td>
                   </tr>
                   <tr>
                     <th className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">Aspiration</div>
                     </th>
                     <td className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">{}</div>
                     </td>
                   </tr>
                   <tr>
                     <th className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">Academic Qualification</div>
                     </th>
                     <td className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">{}</div>
                     </td>
                   </tr>
                   <tr>
                     <th className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">Self Evaluation</div>
                     </th>
                     <td className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">{}</div>
                     </td>
                   </tr>
                   <tr>
                     <th className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">Doubt/Queries</div>
                     </th>
                     <td className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">{}</div>
                     </td>
                   </tr>
                   <tr>
                     <th className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">Mentor Response</div>
                     </th>
                     <td className="px-6 py-4 text-left whitespace-nowrap">
                       <div className="text-sm text-gray-900">
                         <input type="text" name="mentor_response_data" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                         <label htmlFor="studentAcademicQualification" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Academic Qualification</label>
                       </div>
                     </td>
                   </tr>

                 </tbody>
               </table>
               <div className='flex justify-end'>
                 <div className="flex justify-end mt-4"><Button gradientDuoTone="purpleToBlue" className="p-1" type="submit">Submit</Button></div>
               </div>
             </form>
    )
}
