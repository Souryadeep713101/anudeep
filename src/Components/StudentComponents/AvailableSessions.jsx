import React  , {useEffect  ,useContext ,useState} from "react";
import UserContext from "../../Context/UserContext";
import axios from "axios";
const  AvailableSessions = () => {
    
const {userDetails : {token}} = useContext(UserContext)  
const [scheduleDates ,  setScheduleDates] = useState([]) 
const getSessionsURL  =  process.env.REACT_APP_ANUDEEP_GET_SCHEDULE_DATE  
useEffect(()=>{

const fetchSessions = async ()=>{
  const {data: {schedule_date}} = await axios.get(getSessionsURL, {
    headers: {
      'accept': '*/*',
      'Authorization': `Bearer ${token}`,
      'X-CSRF-TOKEN': ''
    }
  })

  const sortedScheduleDate = schedule_date.map(({schedule_date})=>schedule_date).sort((a, b) => new Date(a) - new Date(b))

  setScheduleDates(sortedScheduleDate)
}
fetchSessions()
} , [token ,getSessionsURL])


return (
    <div>
      <div className="border bg-black  w-100 h-800 m-2 p-2 ">
      
      
      {scheduleDates.map(( scheduleDate, index)=>{
           
       const date = new Date(scheduleDate)   
       const today = new Date()
       date.setHours(0, 0, 0, 0); 
       today.setHours(0, 0, 0, 0);

        if(date.toString() === today.toString()){
          return <button
          type="button"
          className="w-[100%] focus:outline-none text-white bg-blue-800 hover:bg-green-800 focus:ring-4 focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          
        >
          Session 1               Running   {date.toDateString()}
        </button>
        }
        else if(date < today){
          return <button
          type="button"
          className="w-[100%] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          
        >
          Session {index+1}       Completed  {date.toDateString()}
        </button>
        }
        else{
       
          return <button
          type="button"
          className="w-[100%] text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
        >
          Session {index+1}      Upcoming    {date.toDateString()}
         
        </button>
   
      
        }



      })}
      
      
   
   
      </div>
    </div>
  );
};

export default AvailableSessions;
