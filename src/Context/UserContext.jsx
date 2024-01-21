import { createContext , useState ,  useEffect } from "react";


const UserContext = createContext();



export const UserContextProvider = ({children})=>{
const [loggedIn , setLoggedIn] = useState(false); 
const  [userDetails ,  setUserDetails] = useState(()=>{
if(sessionStorage.getItem("loggedIn")!==null) {const {status} = JSON.parse(sessionStorage.getItem("loggedIn"))
if( sessionStorage.getItem("loggedIn")!==null && status){
    setLoggedIn(true)
    return JSON.parse(sessionStorage.getItem("userDetails"))
} 
}
else{
    return {};
}
    

});
useEffect(()=>{
    console.log("Context view")
    } , [])


const setUserSessionDetails =  (userDetails)=>{
      setLoggedIn(true);
      setUserDetails(userDetails);
      sessionStorage.setItem("userDetails" , JSON.stringify(userDetails))
      sessionStorage.setItem("loggedIn" , JSON.stringify({status : true}))
      
}

const logOutUser = ()=>{
    setLoggedIn(false);
    setUserDetails({});
    sessionStorage.clear();
}

return <UserContext.Provider value = {{userDetails , setUserSessionDetails , loggedIn  ,setLoggedIn  , logOutUser}}>
    {children}
    </UserContext.Provider>

}








export default UserContext;
