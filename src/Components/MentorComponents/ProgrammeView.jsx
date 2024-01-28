import React, { useContext, useEffect, useState } from 'react'
import SignUp from '../LandingComponents/SignUp'
import { useNavigate } from 'react-router-dom';
import { toast , Bounce} from 'react-toastify';
import ProgrammeContext from '../../Context/PorgrammeContext';
import MentorCommitment from './MentorCommitment';


export default function ProgrammeView() {
  const {programmeDetails} = useContext(ProgrammeContext)
  const [programmeNames , setProgrammeNames] = useState([])
  const [pdfLink ,setPdfLink] = useState("")
  const [mentorDuties , setMentorDuties] = useState()
  const [isProgramSelected,setIsProgramSelected] = useState(false);

  const navigate = useNavigate();


  useEffect(()=>{
    if(programmeDetails.length > 0)setProgrammeNames(programmeDetails.map((programme)=>{return programme.programmeName}))
    
    
    } , [programmeDetails])



  const onChange = (e)=>{
    setIsProgramSelected(true)
     const programme = programmeDetails.find((programme=>{
      
      return programme.programmeName === e.target.value
    }))
    setPdfLink(programme.programmeDetails)
    console.log(programme.mentorDuties)
   setMentorDuties(programme.mentorDuties)
  }




  return <>
    <div className='mx-auto  border border-blue-700 rounded-lg shadow-xl m-2 p-4 justify-center'>ProgrammeView

      <div className="flex flex-col space-y-10  p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100">
      
      <div>
      <label for="countries" className="block mb-2 text-sm font-medium text-gray-900">Select a Program</label>
      <select onInput={onChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected disabled hidden>Choose Your Program</option>
         {programmeNames.map((programmeName)=>{
          return <option value={`${programmeName}`}>{programmeName}</option>
         })}
      </select>
      </div>
      <div>
      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program Details</label>
      <object data={pdfLink} 
        className='w-full ' height="500px">
          
        </object>
      </div> 
      <div>
      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mentor Duties</label>
      <textarea readOnly id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500" placeholder="" value={mentorDuties}></textarea>
      </div>
    
      <div className='text-center m-2 p-4'>
      <button onClick={()=> {
        
        if(isProgramSelected){
        navigate("/Mentor/MentorCommitment")
        }
        else{
          toast.warn('🦄 Hey! You haven\'t checked any of our prorgamme', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            transition: Bounce,
            });
        }
      }
        } type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue</button>

      </div>
    </div>
 </div>
    </>
  
}
