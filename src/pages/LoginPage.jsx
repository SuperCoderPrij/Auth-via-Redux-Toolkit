import { useAuth } from "../hooks/authHooks";

const LoginPage = () => {
  let { navigate, register, handleSubmit, reset, errors, loginForm } =
    useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-gray-500 mt-2">Login to your account</p>
        </div>

        {/* Login Form */}
        <form className="space-y-5" onSubmit={handleSubmit(loginForm)}>
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>

            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "email is required",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {errors.email && (
              <p className="text-xs text-red-500">{errors.email.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
            </div>

            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              {...register("password", {
                required: "password is required",
                minLength: {
                  value: 8,
                  message: "Min 8 characters",
                },
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {errors.password && (
              <p className="text-xs text-red-500">{errors.password.message}</p>
            )}
          </div>

          {/* Remember Me */}
          {/* <div className="flex items-center gap-2">
            <input
              id="remember"
              type="checkbox"
              className="w-4 h-4 accent-blue-600"
            />

            <label htmlFor="remember" className="text-sm text-gray-600">
              Remember me
            </label>
          </div> */}

          {/* Login Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition"
          >
            Login
          </button>
        </form>

        {/* Divider */}
        {/* <div className="flex items-center gap-4 my-6">
          <div className="flex-1 h-px bg-gray-200"></div>
          <span className="text-sm text-gray-400">OR</span>
          <div className="flex-1 h-px bg-gray-200"></div>
        </div>

        <button
          type="button"
          className="w-full py-3 border border-gray-300 rounded-lg font-medium text-gray-700 hover:bg-gray-50 transition"
        >
          Continue with Google
        </button> */}

        {/* Signup */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Don't have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/register")}
            className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
          >
            Sign up
          </button>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   decrement,
//   decrementByValue,
//   increment,
//   incrementByValue,
// } from "../features/counterSlice";

// const LoginPage = () => {
//   let dispatch = useDispatch();
//   let { count } = useSelector((store) => store.counter);
//   const [inpValue, setInpValue] = useState(0);
//   return (
//     <div className="flex flex-col items-center justify-center h-screen text-4xl">
//       Login
//       <h1>Count is {count}</h1>
//       <br />
//       <button
//         onClick={() => dispatch(decrement())}
//         className="p-2 border-3 rounded-lg"
//       >
//         Decrement
//       </button>{" "}
//       <br />
//       <button
//         onClick={() => dispatch(increment())}
//         className="p-2 border-3 rounded-lg"
//       >
//         Increment
//       </button>{" "}
//       <br />
//       <input
//         type="text"
//         placeholder="Add to count"
//         className="p-3 border rounded-lg"
//         onChange={(e) => setInpValue(e.target.value)}
//       />
//       <button
//         className="border-3 mt-2 p-2 rounded-lg"
//         onClick={() => dispatch(incrementByValue(inpValue))}
//       >
//         Increment By Value
//       </button>
//       <br />
//       <input
//         type="text"
//         placeholder="Sub to count"
//         className="p-3 border rounded-lg"
//         onChange={(e) => setInpValue(e.target.value)}
//       />
//       <button
//         className="border-3 mt-2 p-2 rounded-lg"
//         onClick={() => dispatch(decrementByValue(inpValue))}
//       >
//         Decrement By Value
//       </button>
//     </div>
//   );
// };

// export default LoginPage;
