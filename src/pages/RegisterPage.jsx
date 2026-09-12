import { useAuth } from "../hooks/authHooks";

const RegisterPage = () => {
  let { navigate, register, handleSubmit, reset, errors, registerForm } =
    useAuth();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Create Account</h1>
          <p className="text-gray-500 mt-2">Sign up to get started</p>
        </div>

        {/* Register Form */}
        <form className="space-y-5" onSubmit={handleSubmit(registerForm)}>
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Full Name
            </label>

            <input
              id="name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", {
                required: "name is required",
              })}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
            {errors.name && (
              <p className="text-xs text-red-500">{errors.name.message}</p>
            )}
          </div>

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
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Password
            </label>

            <input
              id="password"
              type="password"
              placeholder="Create a password"
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

          {/* Confirm Password */}
          {/* <div>
            <label
              htmlFor="confirmPassword"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Confirm Password
            </label>

            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
          </div> */}

          {/* Register Button */}
          <button
            type="submit"
            className="cursor-pointer w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 active:scale-[0.98] transition"
          >
            Create Account
          </button>
        </form>

        {/* Login */}
        <p className="text-center text-sm text-gray-500 mt-6">
          Already have an account?{" "}
          <button
            type="button"
            onClick={() => navigate("/")}
            className="text-blue-600 font-semibold hover:text-blue-700 cursor-pointer"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default RegisterPage;
