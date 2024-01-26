import React, { useState } from "react";
export default function SessionPlan() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [summary, setSummary] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log({ title, description, summary });
    setTitle("");
    setDescription("");
    setSummary("");
  };

  return (
    <div className="">
      <div className="max-w-md min-w-60 mx-auto w-4/5 h-4/5 backdrop-blur-[5px] bg-[rgba(255,255,255,0.1)] rounded-lg shadow-2xl">
        <form class="max-w-md mx-auto p-6 md:p-10 " onSubmit={handleSubmit}>
          <div class="relative z-0 w-full mb-5 group">
            <input
              type="text"
              name="session-title"
              id="session-title"
              class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-teal-400 focus:border-teal-400 peer"
              placeholder=" "
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
            <label
              for="session-title"
              class="peer-hover:font-medium peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-hover:start-0 peer-focus:start-0 rtl:peer-hover:translate-x-1/4 rtl:peer-focus:translate-x-1/4 rtl:peer-hover:left-auto rtl:peer-focus:left-auto peer-hover:text-teal-400 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-hover:scale-75 peer-hover:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session Title
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="session-description"
              id="session-description"
              class="block py-2.5 px-0 w-full h-24 resize-none text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-teal-400 focus:border-teal-400 peer"
              placeholder=" "
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <label
              for="session-description"
              class="peer-hover:font-medium peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-hover:start-0 peer-focus:start-0 rtl:peer-hover:translate-x-1/4 rtl:peer-focus:translate-x-1/4 rtl:peer-hover:left-auto rtl:peer-focus:left-auto peer-hover:text-teal-400 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-hover:scale-75 peer-hover:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session Description
            </label>
          </div>
          <div class="relative z-0 w-full mb-5 group">
            <textarea
              type="text"
              name="session-summary"
              id="session-summary"
              class="block py-2.5 px-0 w-full h-24 resize-none text-sm text-gray-900 bg-transparent border-0 border-b-2 rounded-md border-gray-300 appearance-none focus:outline-none focus:ring-0 hover:border-teal-400 focus:border-teal-400 peer"
              placeholder=" "
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              required
            />
            <label
              for="session-summary"
              class="peer-hover:font-medium peer-focus:font-medium absolute text-sm text-gray-900 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-hover:start-0 peer-focus:start-0 rtl:peer-hover:translate-x-1/4 rtl:peer-focus:translate-x-1/4 rtl:peer-hover:left-auto rtl:peer-focus:left-auto peer-hover:text-teal-400 peer-focus:text-teal-400 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-hover:scale-75 peer-hover:-translate-y-6 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Session Summary
            </label>
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
