import React, { useState } from "react";

import { Label, Select, Button } from "flowbite-react";

import { Accordion } from 'flowbite-react';

import StudentDetailsCard from "./StudentDetailsCard";
export default function StudentDetails() {
  // sample data
  const studentData = [
    {
      StudentName: "test1",
      Aspiration: "asd",
      AcademicQualification: "edfg",
      SelfEvaluation: "dsfg",
      DoubtQueries: "gdfs",
      MentorResponse: ""
    },
    {
      StudentName: "test2",
      Aspiration: "",
      AcademicQualification: "",
      SelfEvaluation: "",
      DoubtQueries: "",
      MentorResponse: ""
    },
    {
      StudentName: "test3",
      Aspiration: "",
      AcademicQualification: "",
      SelfEvaluation: "",
      DoubtQueries: "",
      MentorResponse: ""
    },
    {
      StudentName: "test4",
      Aspiration: "",
      AcademicQualification: "",
      SelfEvaluation: "",
      DoubtQueries: "",
      MentorResponse: ""
    },
    {
      StudentName: "test5",
      Aspiration: "",
      AcademicQualification: "",
      SelfEvaluation: "",
      DoubtQueries: "",
      MentorResponse: ""
    },
  ];
  const handleSearch = () => {

  }
  const onChange = () => {

  }
  return (
    <>
      <div>
        <form class="max-w-md mx-auto">
          <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
          <div class="relative">
            <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." required />
            <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
          </div>
        </form>
      </div>

      <Accordion className='shadow-lg'>
        {studentData.map((student) => {
          return <Accordion.Panel>
            <Accordion.Title>{student.StudentName}</Accordion.Title>
            <Accordion.Content className='place-content-between'>
              <div className="max-w-md mx-auto">
                <div className="mb-2 block">
                  <Label htmlFor="academic-schedule-dates" value="Select Academic Schedule Date" />
                </div>
                {/* <Select required onChange={(e) => { setSeleectedDate(e.target.value) }}>
                  {academicScheduleDates.map((date) => {
                    return <option value={date}>{date}</option>
                  })}
                </Select> */}
                <table className="min-w-full divide-y divide-gray-200">
                  <tbody className="divide-y divide-gray-200">
                    <tr>
                      <th className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">Student Name</div>
                      </th>
                      <td className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.StudentName}</div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">Aspiration</div>
                      </th>
                      <td className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.Aspiration}</div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">Academic Qualification</div>
                      </th>
                      <td className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.AcademicQualification}</div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">Self Evaluation</div>
                      </th>
                      <td className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.SelfEvaluation}</div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">Doubt/Queries</div>
                      </th>
                      <td className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">{student.DoubtQueries}</div>
                      </td>
                    </tr>
                    <tr>
                      <th className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">Mentor Response</div>
                      </th>
                      <td className="px-6 py-4 text-left whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          <input type="text" name="studentAcademicQualification" onInput={onChange} className="block  px-0 py-2.5 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none  focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                          <label htmlFor="studentAcademicQualification" className="peer-focus:font-medium peer-focus:mb-2 absolute text-sm text-gray-500  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">Enter Your Academic Qualification</label>
                        </div>
                      </td>
                    </tr>

                  </tbody>
                </table>
                <div className='flex justify-end'>
                  <div className="flex justify-end mt-4"><Button gradientDuoTone="purpleToBlue" className="p-1" type="submit">Submit</Button></div>
                </div>
              </div>
            </Accordion.Content>
          </Accordion.Panel>
        })
        }

      </Accordion>
    </>
  );
}
