import React  , {useEffect , useContext  ,useState} from 'react';
import MentorProfileCard from '../MentorProfileCard.jsx';
import UserContext from '../../Context/UserContext.jsx';
import axios from 'axios';
export default function Approvals() {

const [mentors ,  setMentors] = useState([])
const [refresh ,setRefresh]  = useState(false)
const {userDetails : {token}} = useContext(UserContext)
useEffect(()=>{

const fetchMentors = async()=>{
    const {data: {mentors}} = await axios.get('http://143.110.181.19/mentoring-api/public/api/get-mentor', {
        headers: {
          'accept': '*/*',
          'Authorization': `Bearer ${token}`,
          'X-CSRF-TOKEN': ''
        }
      })
      setMentors(mentors)
      setRefresh(false)
}
fetchMentors()
} , [token , refresh])

    return (
        
    <div className='p-10 grid grid-cols-4 gap-4'>
        {mentors.map(mentor=> <MentorProfileCard  key={mentor.id} mentor= {mentor} token = {token} setRefresh={setRefresh}/>
            )
        }
    </div>

    )
}
