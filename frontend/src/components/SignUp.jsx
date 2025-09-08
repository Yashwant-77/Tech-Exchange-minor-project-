import React, { useState } from "react";
import Header from "./Header";
import { User, Mail, Lock } from "lucide-react";
import Button from "./Button";
import { Link } from "react-router-dom";

function SignUp() {
  const [error, setError] = useState(false);
  return (
    <div className="min-h-screen  bg-gradient-to-br from-blue-50 to-indigo-100   ">
      <Header />
      <div className="flex justify-center items-center pt-5">
        {/* Box which is in middle of page */}
        <div className=" w-full max-w-md mx-3 ">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            {/* Heading box */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center">
              <h1 className="text-2xl font-bold text-white">Create Account</h1>
            </div>

            {/* all inputs  */}
            <div>
              <form className="p-8 space-y-6">
                <div className="relative">
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <User className="absolute left-3  h-auto w-5 top-10 text-gray-400" />
                  <input
                    name="fullname"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter you full name"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email
                  </label>
                  <Mail className="absolute left-3 h-auto w-5 top-10 text-gray-400 " />
                  <input
                    name="email"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="xyz@gmail.com"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <Lock className="absolute left-3 h-auto w-5 top-10 text-gray-400 " />
                  <input
                    name="password"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="**********"
                  />
                </div>
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <Lock className="absolute left-3 h-auto w-5 top-10 text-gray-400 " />
                  <input
                    name="confirmPassword"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="**********"
                  />
                </div>
                <button
                  className="w-full cursor-pointer inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 text-lg"
                  type="submit"
                >
                  Submit
                </button>
                <div className="flex justify-center items-center">
                  Already have account?&nbsp;
                  <span className="text-blue-600">
                    <Link to="/login">Log in</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
