import React from "react";

export default function Login() {
  return (
    <div className="login-page m-auto p-16 flex items-center justify-center relative">
      <div className="login-gradient"></div>
      <div className="fixed max-w-sm mx-auto w-4/5 sm:w-3/5 h-3/5 flex items-center justify-center backdrop-blur-md bg-[rgba(255,255,255,0.3)] rounded-lg shadow-2xl">
        <img
          src="/illustration.png"
          alt="illustration"
          className="illustration absolute top-[-10%] right-0 w-3/5 "
        />
        <form className="flex flex-col mx-auto w-4/5 z-[2]">
          <div className="mb-5">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="form-input bg-[rgba(255,255,255,0.3)] border-2 border-gray-300 text-gray-900 text-sm rounded-lg placeholder:text-gray-400 focus:outline-none focus:outline-0 focus:border-teal-400 focus:border-2 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark dark:focus:outline-none dark:focus:outline-0 dark:focus:border-teal-400 dark:focus:border-2 duration-200 focus:shadow-inner"
              placeholder="name@mail.com"
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
              placeholder="••••••••"
              required
            />
          </div>
          <button
            type="submit"
            className="mt-4 text-white bg-teal-400 hover:bg-teal-500 focus:outline-none font-medium rounded-lg text-sm self-center w-auto px-5 py-2.5 text-center dark:bg-teal-400 dark:hover:bg-teal-500 duration-200 focus:shadow-inner hover:shadow-inner"
          >
            <span className="">Submit</span>
          </button>
        </form>
      </div>
    </div>
  );
}
