import React from 'react';
import {Mentors} from '../MockData/SampleData.jsx';
import MentorProfileCard from './MentorProfileCard.jsx';

export default function Approvals() {



    return (
        
    <div className='p-10 grid grid-cols-4 gap-4'>
        {Mentors.map(mentor=> <MentorProfileCard  mentor= {mentor}/>
            )
        }
    </div>

    )
}
