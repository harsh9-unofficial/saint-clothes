import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* Left Panel */}
      <div className="hidden md:w-1/2 bg-[#527557] text-[#F6F6F6] p-10 md:flex flex-col justify-center items-start space-y-4 ">
        <h2 className="md:text-3xl xl:text-5xl font-semibold">
          Join the community!
        </h2>
        <p className="md:text-xl xl:text-2xl">
          Create your account and unlock a world of personalized experiences. It
          only takes a moment to get started—let's go!
        </p>
      </div>

      {/* Right Panel */}
      <div className="md:w-1/2 h-screen flex justify-center items-center p-4">
        <div className="w-full max-w-xl space-y-2 md:space-y-6">
          <div className="flex justify-center">
            <Link to="/">
              <img
                src="/images/Logo.png"
                alt="Saint Store"
                className="text-center"
              />
            </Link>
          </div>
          <form className="space-y-6">
            <div className="flex flex-col gap-1">
              <label
                htmlFor="username"
                className="block text-lg font-semibold text-[#527557]"
              >
                Username
              </label>
              <input
                id="username"
                type="text"
                placeholder="Enter your name"
                className="mt-1 w-full border border-[#527557] rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#527557]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="email"
                className="block text-lg font-semibold text-[#527557]"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                className="mt-1 w-full border border-[#527557] rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#527557]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="phonenumber"
                className="block text-lg font-semibold text-[#527557]"
              >
                Phone Number
              </label>
              <input
                id="phonenumber"
                type="tel"
                placeholder="Enter your number"
                className="mt-1 w-full border border-[#527557] rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#527557]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="password"
                className="block text-lg font-semibold text-[#527557]"
              >
                Passwords
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                className="mt-1 w-full border border-[#527557] rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#527557]"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label
                htmlFor="repassword"
                className="block text-lg font-semibold text-[#527557]"
              >
                Re-Password
              </label>
              <input
                id="repassword"
                type="email"
                placeholder="Enter your repassword"
                className="mt-1 w-full border border-[#527557] rounded px-4 py-4 focus:outline-none focus:ring-2 focus:ring-[#527557]"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#527557] text-white py-4 px-4 rounded cursor-pointer text-xl"
            >
              Sign up
            </button>
          </form>

          <p className="text-center text-xl text-[#527557] mt-4">
            Can't Log in?{" "}
            <Link to="/login" className="font-bold text-[#527557]">
              Login
            </Link>{" "}
            an account
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
