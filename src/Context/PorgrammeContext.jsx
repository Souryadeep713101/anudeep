import { createContext ,useContext  , useState  ,useEffect} from "react";
import axios from "axios";
import UserContext from "./UserContext";
import { toast } from "react-toastify";


const ProgrammeContext = createContext()



export const ProgrammeContextProvider = ({children})=>{


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
       
   
       
     console.log(response.data)
        setProgrammeDetails(response.data.programmes);
     
        
      } catch (e) {
        toast.error("Login failed. Please try again.", {
          position: "top-right",
          autoClose: 3000, // milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
        
      }
    }

}
fetchProgrammeDetails();
} , [anudeepProgrammeURL , userDetails.token])

    






    return <ProgrammeContext.Provider value = {{programmeDetails}}>
        {children}
    </ProgrammeContext.Provider>
}

export default ProgrammeContext