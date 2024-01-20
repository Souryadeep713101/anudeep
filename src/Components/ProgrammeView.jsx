import React, { useState } from 'react'
import SignUp from './SignUp'

export default function ProgrammeView() {
  const [isProgramSelected,setIsProgramSelected] = useState(false);
  const onChange = ()=>{
    setIsProgramSelected(true)
  }
  return isProgramSelected?<SignUp/>:(
    <div className='max-w-md mx-auto border border-blue-700 rounded-lg shadow-lg m-2 p-4 justify-center'>ProgrammeView

      <div className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">

      <label for="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Program</label>
      <select onChange={onChange} id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
        <option selected>Choose Your Program</option>
        <option value="US">Java</option>
        <option value="CA">Python</option>
        <option value="FR">C++</option>
        <option value="DE">C#</option>
      </select>

      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Program Details</label>
      <textarea readOnly id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>

      <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Mentor Duties</label>
      <textarea readOnly id="message" rows="4" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder=""></textarea>
      </div>
      <div className='text-center m-2 p-4'>
      <button onClick={()=>setIsProgramSelected(true)} type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Continue</button>

      </div>
    </div>
  )
}
