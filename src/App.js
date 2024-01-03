import { BrowserRouter , Routes  ,  Route } from "react-router-dom"
import Home from "./Components/Home";
import ProgrammeView from "./Components/ProgrammeView";
import Login from "./Components/Login";
import About from "./Components/About";
function App() {
  return (
   <>
   
   <BrowserRouter>
   <Routes>  
        <Route path="/" element={<Home/>}>
         <Route index  element={<ProgrammeView/>}/>
        <Route path='/login'  element={<Login/>}/>
        <Route path='/about'  element={<About/>}/> 
        </Route>
              
  </Routes>  
  </BrowserRouter>
   </>
  );
}

export default App;
