import React, { useState } from 'react';
import { Button } from "flowbite-react";

const StudentAspiration = () => {

  // Sample data for demo purpose only
  const sampleData = [{ id: 1, skill: "abcd", selfEvaluation: "ghtf" }, { id: 2, skill: "bngh", selfEvaluation: "nbhgjy" }, { id: 3, skill: "bhkkk", selfEvaluation: "ioioioio" }];

  const [formData, setFormData] = useState({});
  const [skillSelfEvaluationData, setSkillSelfEvaluationData] = useState(sampleData);
  // const [skillSelfEvaluationData, setSkillSelfEvaluationData] = useState([]);

  const handleSkillSelfEvaluationDataUpdation = (event, id, key) => {
    const updatedData = skillSelfEvaluationData.map((record) => {
      if (record.id === id) {
        return {
          ...record,
          [key]: event.target.value
        }
      }
      return record;
    });
    setSkillSelfEvaluationData(updatedData);
  }
  const handleSkillSelfEvaluationDataInsertion = () => {
    const newRow = skillSelfEvaluationData.length + 1;
    const updatedData = [...skillSelfEvaluationData];
    updatedData.push({ id: newRow, skill: "", selfEvaluation: "" });
    setSkillSelfEvaluationData(updatedData);
  }
  const showSkillSelfEvaluationTableData = skillSelfEvaluationData.map((record) => {
    return (

      <tr key={record.id}>
        <td>
          <input className='w-full' type='text' value={record.skill} onChange={(event) => handleSkillSelfEvaluationDataUpdation(event, record.id, "skill")}></input>
        </td>
        <td>
          <input className='w-full' type='text' value={record.selfEvaluation} onChange={(event) => handleSkillSelfEvaluationDataUpdation(event, record.id, "selfEvaluation")}></input>
        </td>
      </tr>
    )
  })
  const onChange = (e) => {
    setFormData((prevFormData) => {
      return { ...prevFormData, [e.target.name]: e.target.value }
    })
  }
  const handleFormSubmission = () => {
    // needs to be discussed
  }
  return (
    <div className="flex flex-row">
      <form onSubmit={handleFormSubmission} className="z-2 grow min-w-md  border-2   p-16  rounded-lg shadow-2xl">
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="studentAspiration" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="studentAspiration" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Aspiration</label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="studentAcademicQualification" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="studentAcademicQualification" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Academic Qualification</label>
        </div>
        <div className="flex flex-col">
          Skill I need to have
          <table>
            <tr>
              <th>Skill</th>
              <th>Self-Evaluation(10)</th>
            </tr>
            {showSkillSelfEvaluationTableData}
          </table>
          <div className='flex justify-end'>
            <button onClick={handleSkillSelfEvaluationDataInsertion}>
              <svg class="w-[43px] h-[43px] text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="blue" viewBox="0 0 24 24">
                <path fill-rule="evenodd" d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0Zm11-4.2a1 1 0 1 0-2 0V11H7.8a1 1 0 1 0 0 2H11v3.2a1 1 0 1 0 2 0V13h3.2a1 1 0 1 0 0-2H13V7.8Z" clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input type="text" name="studentDoubtConcern" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
          <label htmlFor="studetnDoubtConcern" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Doubt and Concerns</label>
        </div>
        <div className="flex justify-end mt-4"><Button gradientDuoTone="purpleToBlue" className="p-1" type="submit">Submit</Button></div>
      </form>
    </div>
  )
}

export default StudentAspiration
