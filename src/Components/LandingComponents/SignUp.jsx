import React, { useState } from "react";
import { TypeAnimation } from 'react-type-animation';
import { Label , FileInput ,Button } from "flowbite-react";
import { toast } from "react-toastify";

import axios from "axios";
export default function SignUp(){
    
    const [formData , setFormData] = useState({});
    const registerMentorURL = process.env.REACT_APP_ANUDEEP_REGISTER_MENTOR;
    const onChange = (e)=>{
        
        if(e.target.name==="fileUpload") {
            setFormData((prevFormData)=>{
                return {...prevFormData , file  : e.target.files[0]}
            })
            return;
        }
           setFormData((prevFormData)=>{
            return {...prevFormData   , [e.target.name]  : e.target.value}
           })
    }
    const handleFormSubmission = async(e)=>{
      e.preventDefault();
      try {
        
     console.log(formData)
     

      //Registered Mentor
      const response  = await axios.post(registerMentorURL , formData, 
        {
         method: 'post',
         headers: {
           'Accept': 'application/json',
           'Content-Type': 'multipart/form-data',
          
         },
       })
      console.log(response)

      
    
      setFormData({})
      e.target.reset();
      
      toast.success("Your data has gone for Approval", {
        position: "top-right",
        autoClose: 5000, // milliseconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      }
      catch(ex) {
         console.log(ex)
      }
    }
    return(
        <>
            <div className="flex flex-row">
               
            <img  className="hidden md:flex" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/illustration.svg" alt="illustration"/>
                <form  onSubmit={handleFormSubmission} className="z-2 grow min-w-md  border-2   p-16  rounded-lg shadow-2xl">
           
    <TypeAnimation
      sequence={[
        'Register As Mentor', // Types 'One'
        1000, // Waits 1s
        'Register with Anudeep As Mentor', // Deletes 'One' and types 'Two'
        2000, // Waits 2s
        'Help The Needy By Registering As Mentor', // Types 'Three' without deleting 'Two'
      
      ]}
      wrapper="span"
      cursor={true}
      repeat={Infinity}
      style={{ fontSize: '2em', display: 'inline-block' ,color: 'green' ,fontWeight : "bold" ,marginBottom : "0.5em" , fontFamily: "arial"}}
    />
                <div className="relative z-0 w-full mb-5 group">
                <input  type="text" name="name"  onInput={onChange}      className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required   />
                <label htmlFor="name" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Full name</label>   
                </div>
                {/* <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="floating_last_name" id="floating_last_name" className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label for="floating_last_name" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Last name</label>
                </div> */}
                <div className="relative z-0 w-full mb-5 group">
                    <input  type="email" name="email"   onInput={onChange} className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="email" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Email address</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input  type="tel"  pattern="^[6-9]\d{9}$" name="phone" onInput={onChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="phone" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Phone number (9876543210)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input  type="text" name="designation" onInput={onChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="designation" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Designation (Ex. System Engineer)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input  type="text" name="organization" onInput={onChange}  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="organization" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Company (Ex. TCS)</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input name="linkedinId" onInput={onChange}  type="text"   className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="linkedinId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Linkedin ID</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input  type="text" onInput={onChange} pattern="^[0-9]{4}$" name="aadharId"  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                    <label htmlFor="aadharId" className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">ID Validation(Last 4 digits)</label>
                </div>
                <div>
      <div className="mb-2 block">
        <Label htmlFor="fileUpload" className="text-gray-500" value="Upload Aadhar"/>
      </div>
      <FileInput name="fileUpload" helperText="SVG, PNG, JPG or PDF" id="file-upload"  onInput={onChange} />
    </div>
                
    <div className="flex justify-end mt-4"><Button gradientDuoTone="purpleToBlue" className="p-1" type="submit">Register</Button></div>      
    
    </form>
         
            
            </div>
        </>
    )
}