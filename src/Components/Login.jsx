import React, { useState , useContext } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import UserContext from "../Context/UserContext";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const anudeepLoginURL =  process.env.REACT_APP_ANUDEEP_LOGIN;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const  {setUserSessionDetails} = useContext(UserContext);
 const navigate = useNavigate(); 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
  

      const response  = await axios.post(anudeepLoginURL , {
        user_id : username , 
        password : password } , 
        {
         method: 'post',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'application/x-www-form-urlencoded',
          
         },
       }
        
        )
     
 
        toast.success("Login successful!", {
          position: "top-right",
          autoClose: 5000, // milliseconds
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
        });
       
      setUserSessionDetails(response.data);
      setUsername("");
      setPassword("");
      navigate("/Mentor")
      
    } catch (e) {
      toast.error("Login failed. Please try again.", {
        position: "top-right",
        autoClose: 3000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      console.error("Error during login: ", e);
    }
;
  };

  return (
    <div className="login-page m-auto p-16 flex items-center justify-center relative">
      <div className="login-gradient relative"></div>
      <div className="absolute max-w-sm mx-auto w-4/5 sm:w-3/5 h-3/5 flex items-center justify-center backdrop-blur-md bg-[rgba(255,255,255,0.3)] rounded-lg shadow-2xl">
        <img
          src="/illustration.png"
          alt="illustration"
          className="illustration absolute top-[-10%] right-0 w-3/5 "
        />
        <form
          className="flex flex-col mx-auto w-4/5 z-[2]"
          onSubmit={handleSubmit}
        >
          <div className="mb-5">
            <label
              for="username"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your username
            </label>
            <input
              type="text"
              id="username"
              className="form-input bg-[rgba(255,255,255,0.3)] border-2 border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-gray-400 focus:outline-none focus:outline-0 focus:border-teal-400 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark dark:focus:outline-none dark:focus:outline-0 dark:focus:border-teal-400 dark:focus:border-2 duration-200 focus:shadow-inner"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="your-name"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="form-input bg-[rgba(255,255,255,0.3)] border-2 border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-gray-400 focus:outline-none focus:border-teal-400 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark dark:focus:outline-none dark:focus:outline-0 dark:focus:border-teal-400 dark:focus:border-2 duration-200 focus:shadow-inner"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 text-white bg-teal-400 hover:bg-teal-500 focus:outline-none font-medium rounded-lg text-sm self-center w-auto px-5 py-2.5 text-center dark:bg-teal-400 dark:hover:bg-teal-500 duration-200 focus:shadow-inner hover:shadow-inner"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
