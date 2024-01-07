import React from 'react';
import {Mentors} from '../MockData/SampleData.jsx';

export default function Approvals() {



    return (
        
    <div className='p-10 grid grid-cols-4 gap-4'>
        {Mentors.map(mentor=>
                <div className="max-w-sm p-2 bg-white border border-blue-500 rounded-lg shadow blue:bg-blue-950 dark:border-blue-700">
                    <h4><b>Name: </b>{mentor.Name}</h4>
                    <h4><b>Email: </b>{mentor.Email}</h4>
                    <h4><b>Phone: </b>{mentor.Phone}</h4>
                    <h4><b>Designation: </b>{mentor.Designation}</h4>
                    <h4><b>Organization: </b>{mentor.Organization}</h4>
                    <h4><b>LinkedIn Id: </b><a href={mentor.LinkedInId}>{mentor.LinkedInId}</a></h4>
                    <h4><b>Id Validation: </b>{mentor.IdValidation}</h4>
                    {mentor.IdImage && <img src={mentor.IdImage} alt={mentor.Name}/>}
                    <div className='flex justify-between'>
                        <button type="button" class="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">Reject</button>
                        <button type="button" class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800">Approve</button>
                    </div>
                </div>
            )
        }
    </div>

    )
}
