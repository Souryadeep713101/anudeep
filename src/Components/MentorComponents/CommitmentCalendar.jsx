import React  , {useState , useContext, useEffect} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../../HighlightedCalendar.css'
import axios from 'axios';
import UserContext from '../../Context/UserContext';
export default function CommitmentCalendar() {
  
  
  const {userDetails : {token}} = useContext(UserContext)
  const [highlightedDays ,setHighlightedDays] = useState([])
  const [maxAllowedDate , setMaxAllowedDate] = useState(new Date())
  const [minAllowedDate , setMinAllowedDate]  = useState(new Date())
  const getSchedulingURL = process.env.REACT_APP_ANUDEEP_GET_SCHEDULING
  useEffect(()=>{
  const fetchCommitments = async ()=>{
    const daysOfWeek = {
      Monday: 1,
      Tuesday: 2,
      Wednesday: 3,
      Thursday: 4,
      Friday: 5,
      Saturday: 6,
      Sunday: 7
    };
    const { data : {schedule_details}} = await axios.get(getSchedulingURL, {
      headers: {
        'accept': '*/*',
        'Authorization': `Bearer ${token}`,
        'X-CSRF-TOKEN': ''
      }
    })
   
   
    const scheduleDays = []
    schedule_details?.forEach((day)=>{
           
      day.day_name.forEach((day_name)=>{
            scheduleDays.push( {day : daysOfWeek[day_name] , ...day})
      })


    })
    setHighlightedDays(scheduleDays)
    const maxDate = scheduleDays.reduce((acc, current) => {
      const currentDate = new Date(current.end_date);
      return currentDate > acc ? currentDate : acc;
    }, new Date(0));

    const minDate = scheduleDays.reduce((acc, current) => {
      const currentDate = new Date(current.start_date);
      return currentDate <  acc ? currentDate : acc;
    }, new Date("01/01/2999"));

   
    setMinAllowedDate(minDate)
    setMaxAllowedDate(maxDate)

  }
  fetchCommitments()
 } , [getSchedulingURL , token]) 
    
  
  
    
    const tileClassName = ({ date }) => {
      if(date<=maxAllowedDate){
      return (highlightedDays.some((day)=> date.getDay() === day.day && date <= new Date(day.end_date) && date >= new Date(day.start_date))) ? 'highlighted-date' : '';
      }
    };
    const tileContent = ({ date }) => {
      if(date<=maxAllowedDate){
      const dayInfo = highlightedDays.filter(day => date.getDay() === day.day && date <= new Date(day.end_date) && date >= new Date(day.start_date) );
    
      return dayInfo.map((day)=>{
       
        return <div className="highlighted-content">
        <div className="flex flex-col items-center">
        <div className='flex'><small className='font-bold text-red-700'>{day.course_alias}</small></div>  
        <div className='flex text-blue-500'><span><small>start time</small></span>  :  <span><small>{day.start_time}</small></span></div>
        <div className="flex"><span><small>end time</small></span>  :  <span><small>{day.end_time}</small></span></div>
        
        </div>
        
        
      
        </div>
      })
      }
    };
  
    
 
   


  return (
    <div className="cal-container  p-10 shadow-xl">
    <div className="cal-header  rounded shadow-2xl relative z[2]">
      <h2>Commited Dates</h2>
    </div>
  <Calendar
   
    // onActiveStartDateChange={(args) => {
    //   handleActiveStartDateChange(args)
    // }} 
    tileClassName={tileClassName}
    tileContent= {tileContent}
    readOnly = {true}
    minDate  = {minAllowedDate}
    maxDate={maxAllowedDate}
  />




</div>
  )
}
