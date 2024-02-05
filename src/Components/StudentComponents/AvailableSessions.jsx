import React from "react";
import { useNavigate } from "react-router-dom";

const AvailableSessions = () => {
    const navigate = useNavigate();
    const handleRatingSession = ()=>{
        // Check if session is completed then go for rating the session
      
        navigate('/Student/RateSessions')
        // Else Say Please Complete the session
    }
  return (
    <div>
      <div className="border bg-black  w-100 h-800 m-2 p-2 ">
      <button
              type="button"
              className="w-[100%] focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-700 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              onClick={handleRatingSession}
            >
              Session 1
              Completed
            </button>
      <button
              type="button"
              className="w-[100%] text-white bg-yellow-400 hover:bg-yellow-300 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-yellow-600 dark:hover:bg-yellow-700 focus:outline-none dark:focus:ring-yellow-800"
            >
              Session 2
              Running
            </button>
        {Array(5)
          .fill("")
          .map((e, index) => (
            <button
            key={index}
              type="button"
              className="w-[100%] text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-600 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            >
              Session {index+3} Running
            </button>
          ))}
      </div>
    </div>
  );
};

export default AvailableSessions;
