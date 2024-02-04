import React from 'react'
import { useRef } from 'react';
import ReactStars from "react-rating-stars-component";

const RateSessions = () => {
    const rating = useRef(0);
    const feedback = useRef(null);
    const learnings = useRef(null);
    const ratingChanged = (newRating) => {
            console.log(newRating);
            rating.current=newRating;
    };
    const handleSubmit = () => {
        // Make a Request to submit the ratings of the session.
            console.log(rating.current+" "+feedback.current+" "+learnings.current);
    };

  return (
        <div className='flex flex-col justify-center'>
            <form className='p-2'>
                <div className='w-[50%] bg-white-300 flex justify-between py-2 rounded-lg'>
                    <h1>Please rate about session </h1>
                    <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={24}
                        isHalf={true}
                        emptyIcon={<i className="far fa-star"></i>}
                        halfIcon={<i className="fa fa-star-half-alt"></i>}
                        fullIcon={<i className="fa fa-star"></i>}
                        activeColor="#ffd700"
                    />
                </div>
            
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter your subjective feedback</label>
                <textarea ref={feedback} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your feedback here..."></textarea>
                <label for="message" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">What did you learn from session?</label>
                <textarea ref={learnings} id="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your learnings here..."></textarea>
                <button type="button" class="mt-2 focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800" onClick={handleSubmit}>Submit</button>
            </form>
    </div>
  )
}

export default RateSessions