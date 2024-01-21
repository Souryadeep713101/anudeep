import { BrowserRouter , Routes  ,  Route } from "react-router-dom"
import Home from "./Components/Home";
import ProgrammeView from "./Components/ProgrammeView";
import Login from "./Components/Login";
import About from "./Components/About";
import MentorCommitment from "./Components/MentorCommitment";
import Approvals from "./Components/Approvals";
import SessionPlan from "./Components/SessionPlan";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import StudentDetails from "./Components/StudentDetails";
function App() {
  return (
   <>
   
   <BrowserRouter>

   <Routes>  
        <Route path="/" element={<Home/>}>
         <Route index  element={<ProgrammeView/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/MentorCommitment'  element={<MentorCommitment/>}/> 
        <Route path='/ApproveMentor'  element={<Approvals/>}/> 
        <Route path='/about'  element={<About/>}/> 
        <Route path='/sessionPlan'  element={<SessionPlan />}/> 
        <Route path='/studentDetails'  element={<StudentDetails />}/> 
        </Route>
              
  </Routes> 
  <ToastContainer/>
  </BrowserRouter>
   </>
  );
}

export default App;
