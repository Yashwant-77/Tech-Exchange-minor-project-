import React, { useState } from "react";
import Header from "./Header";
import { User, Mail, Lock, Eye, EyeOff } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { login, logout } from "../store/authSlice";

function SignUp() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUser = async (data) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/createuser",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            fullname: data.fullname,
            email: data.email,
            password: data.password,
          }),
        }
      );

      const json = await response.json();
      console.log("after response.json" + json);

      if (json.success) {
        dispatch(login(json.authToken));
        navigate("/");
      } else {
        console.log("else part of data.success" + json.error);
        setError(json.error);
        reset();
      }
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      reset();
    }
  };

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
              <form
                onSubmit={handleSubmit(createUser)}
                className="p-8 space-y-6"
              >
                <div className="relative">
                  <label
                    htmlFor="fullname"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Full Name
                  </label>
                  <User className="absolute left-3  h-auto w-5 top-10 text-gray-400" />
                  <input
                    {...register("fullname", {
                      required: "This field is required",
                      minLength: {
                        value: 5,
                        message: "Name must be at least 5 characters long",
                      },
                    })}
                    name="fullname"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="text"
                    placeholder="Enter you full name"
                  />
                  {errors.fullname && (
                    <span className="text-red-500">
                      {errors.fullname?.message}
                    </span>
                  )}
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
                    {...register("email", {
                      required: "This field is required",
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                        message: "Please enter a valid email",
                      },
                    })}
                    name="email"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3  focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="email"
                    placeholder="xyz@gmail.com"
                  />
                  {errors.email && (
                    <span className="text-red-500">
                      {errors.email?.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Password
                  </label>
                  <Lock className="absolute left-3 h-auto w-5 top-10 text-gray-400 " />
                  {showPassword ? (
                    <EyeOff className="absolute right-3 h-auto w-5 top-10 text-gray-400" />
                  ) : (
                    <Eye className="absolute right-3 h-auto w-5 top-10 text-gray-400 " />
                  )}

                  <input
                    {...register("password", {
                      required: "This field is required",
                      pattern: {
                        value:
                          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,

                        message:
                          "Password should contain at least 8 characters, one uppercase, one lowercase, one digit, and one special character",
                      },
                    })}
                    name="password"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="**********"
                  />
                  {errors.password && (
                    <span className="text-red-500">
                      {errors.password?.message}
                    </span>
                  )}
                </div>
                <div className="relative">
                  <label
                    htmlFor="confirmPassword"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Confirm Password
                  </label>
                  <Lock className="absolute left-3 h-auto w-5 top-10 text-gray-400 " />
                  {showPassword ? (
                    <EyeOff className="absolute right-3 h-auto w-5 top-10 text-gray-400" />
                  ) : (
                    <Eye className="absolute right-3 h-auto w-5 top-10 text-gray-400 " />
                  )}
                  <input
                    {...register("confirmPassword", {
                      required: "This field is required",
                      validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                    })}
                    name="confirmPassword"
                    className="pl-10 w-full border border-gray-300 rounded-xl px-4 py-3 pr-10 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    type="password"
                    placeholder="**********"
                  />
                  {errors.confirmPassword && (
                    <span className="text-red-500">
                      {errors.confirmPassword?.message}
                    </span>
                  )}
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
