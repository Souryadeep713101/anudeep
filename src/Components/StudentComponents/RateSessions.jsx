import React  , {useState , useEffect , useContext} from 'react'
import ReactStars from "react-rating-stars-component";
import UserContext from '../../Context/UserContext';
import { Label , Select } from 'flowbite-react';
import axios from 'axios';
import { toast } from 'react-toastify';

const RateSessions = () => {





    const [formData , setFormData] = useState({})
    const [selectedDate ,  setSelectedDate]  = useState("")
    const [responsePendingDates , setResponsePendingDates] = useState([])
    const {userDetails : {token}} = useContext(UserContext)
    const getResponsePendingDateURL = process.env.REACT_APP_ANUDEEP_GET_RESPONSE_PENDING_DATE
    const addStudentDataURL = process.env.REACT_APP_ANUDEEP_ADD_STUDENT_DATA
   
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
     
      const onRatingChange = (rating)=>{
        
        setFormData((prevFormData)=>{
            return {...prevFormData , rating : rating}
          })
      }






    const onSubmit = (e) => {
   
        e.preventDefault()
    
      try{
        axios.post( addStudentDataURL, {
  student_data: {formData},
  schedule_date: selectedDate,
  type: 'feedback'
}, {
  headers: {
    'accept': 'application/json',
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/x-www-form-urlencoded',
    'X-CSRF-TOKEN': ''
  }
})
        toast.success('🦄 Successfull Submission Of Your Feedback!!');
        e.target.reset()
        setFormData({})
        setSelectedDate("")
      }
      catch(e) {
        toast.error("Unsuccessfull Submission Of Your Feedback")
      }




           
    };

  
     const onChange = (e)=>{
        
       setFormData((prevFormData)=>{
         return {...prevFormData , [e.target.name] : e.target.value}
       })
     }




  return (
        <div className='flex flex-col justify-center'>
            <form className='p-2' onSubmit={onSubmit}>
            <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="response-pending-date" value="Select Response Pending Date" />
      </div>
      <Select required onChange = {(e)=>{setSelectedDate(e.target.value)}}>
        {responsePendingDates.map((date)=>{
               return <option value={date}>{date}</option>
        })}
        
        
      </Select>
    </div>

                <div className='w-[50%] bg-white-300 flex justify-between py-2 rounded-lg'>
                    <h1>Please rate about session </h1>
                    <ReactStars
                        count={5}
                        onChange={onRatingChange}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                        name = "rating"
                    />
                </div>
            
                <label for="subjective_feedback" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your subjective feedback</label>
                <textarea name='subjective_feedback' id="subjective_feedback"      onInput= {onChange}      rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your feedback here..."></textarea>
                <label for="learn_session" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What did you learn from session?</label>
                <textarea name='learn_session' id="learn_session"   onInput= {onChange}      rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your learnings here..."></textarea>
                <button type="submit" class="mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" >Submit</button>
            </form>
    </div>
  )
}

export default RateSessions