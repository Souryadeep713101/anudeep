import { createContext ,useContext  , useState  ,useEffect} from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";


const ProgrammeContext = createContext()



export const ProgrammeContextProvider = ({children})=>{

const navigate  =  useNavigate();
const {userDetails} = useContext(UserContext)
const anudeepProgrammeURL = process.env.REACT_APP_ANUDEEP_PROGRAMME_DETAILS
const [programmeDetails , setProgrammeDetails] = useState([])
useEffect(()=>{
const fetchProgrammeDetails = async()=>{
    if(userDetails.token) {
    try {
  
     
        const response  = await axios.get(anudeepProgrammeURL  , 
          {

           method: 'GET', 
           headers: {
             'accept': '*/*',
             'Authorization' : `Bearer ${userDetails.token}` 
            
           },
         }
          
          )
       

        setProgrammeDetails(response.data.programmes);
     
        
      } catch (e) {
        
        toast.error(e.message, {
          position: "top-right",
          autoClose: 3000, // milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        if(e.response.status === 500) navigate("/Error/500")

      }
    }

}
fetchProgrammeDetails();
} , [anudeepProgrammeURL , userDetails.token , navigate])

    






    return <ProgrammeContext.Provider value = {{programmeDetails}}>
        {children}
    </ProgrammeContext.Provider>
}

export default ProgrammeContext