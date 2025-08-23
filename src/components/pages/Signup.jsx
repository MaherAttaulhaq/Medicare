import React from "react";

export const Signup = () => {
  return (
    <form>
      <div className="flex items-center justify-center w-full">
        <div
          className={`mx-auto  max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
        >
          <div>
            <h2 className="font-bold text-center">Create an Account</h2>
          </div>
          <div className="flex justify-center items-center">
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              name="username"
              required
              className="outline-none  border-blue-400 border-2 my-4"
            />
          </div>
          <div className="flex justify-center items-center">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="outline-none  border-blue-400 border-2 my-4"
            />
          </div>
          <div className="flex justify-center items-center">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="outline-none  border-blue-400 border-2 my-4"
            />
          </div>
          <div className="flex justify-center items-center">
            <label htmlFor="confirm_password">Confirm Password:</label>
            <input
              type="password"
              id="confirm_password"
              name="confirm_password"
              required
              className="outline-none  border-blue-400 border-2 my-4"
            />
          </div>
          <div className="text-center">
            <button type="submit" className="font-bold ">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
