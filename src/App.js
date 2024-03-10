import { BrowserRouter , Routes  ,  Route } from "react-router-dom"
import Mentor from "./Components/MentorComponents/Mentor";
import ProgrammeView from "./Components/MentorComponents/ProgrammeView";
import Login from "./Components/LandingComponents/Login";
import About from "./Components/About";
import MentorCommitment from "./Components/MentorComponents/MentorCommitment";
import Approvals from "./Components/ApproverComponents/Approvals";
import SessionPlan from "./Components/MentorComponents/SessionPlan";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { UserContextProvider } from "./Context/UserContext";
import Landing from "./Components/LandingComponents/Landing";
import SignUp from "./Components/LandingComponents/SignUp";
import { ProgrammeContextProvider } from "./Context/PorgrammeContext";
import Student from "./Components/StudentComponents/Student";
import CommitmentCalendar from "./Components/MentorComponents/CommitmentCalendar";
import AvailableMentor from "./Components/CentreManagerComponents/AvailableMentor";
import BookedMentor from "./Components/CentreManagerComponents/BookedMentor";
import StudentDetails from "./Components/MentorComponents/StudentDetails";
import CentreManager from "./Components/CentreManagerComponents/CentreManager";
import AvailableSessions from "./Components/StudentComponents/AvailableSessions";
import RateSessions from "./Components/StudentComponents/RateSessions";
import Approver from "./Components/ApproverComponents/Approver";
import StudentAspiration from "./Components/StudentComponents/StudentAspiration";
function App() {

  return (
   <>
   <UserContextProvider>
    
   <BrowserRouter>

   <Routes>  
        {/* Landing */}
         <Route  path="/"  element = {<Landing/>}>
         <Route index  element={<SignUp/>}/> 
         <Route path='/login'  element={<Login/>}/>
         <Route path='/About'  element={<About/>}/>     
                 
         </Route>
       {/* Mentor */}
      
        <Route path="/Mentor" element={<ProgrammeContextProvider><Mentor/></ProgrammeContextProvider>}>
      
        <Route index  element={<ProgrammeView/>}/>
        <Route path="/Mentor/MentorCommitment" element={<MentorCommitment/>}/> 
        <Route path='/Mentor/CommitmentCalendar'  element={<CommitmentCalendar/>}/> 
        <Route path='/Mentor/SessionPlan'  element={<SessionPlan/>}/>
       <Route path='/Mentor/StudentDetails'  element={<StudentDetails/>}/> 
        <Route path='/Mentor/About'  element={<About/>}/> 
     
        </Route>
        

        {/* Student */}

        <Route  path="/Student"  element = {<Student/>}>
          <Route index  element={<AvailableSessions/>}/> 
          <Route path='/Student/About'  element={<About/>}/>
          <Route path='/Student/StudentAspiration'  element={<StudentAspiration/>}/>  
          <Route path='/Student/RateSessions'  element={<RateSessions/>}/> 
         </Route>

      {/* CentreManager   */}

      <Route  path="/CentreManager"  element = {<CentreManager/>}>
         <Route index  element={<AvailableMentor/>}/> 
         <Route path='/CentreManager/BookedMentor'  element={<BookedMentor/>}/>
         <Route path='/CentreManager/About'  element={<About/>}/> 
      </Route>  



                   {/* Approver */}
  <Route  path="/Approver"  element = {<Approver/>}>
         <Route index  element={<Approvals/>}/> 
         <Route path='/Approver/About'  element={<About/>}/> 
  </Route>  

 <Route path="/Error/500"  element = {<><h1>Internal Server Error</h1></>} />
 
  </Routes> 
  <ToastContainer/>
  </BrowserRouter>
 
  </UserContextProvider>
   </>
  );
}

export default App;
