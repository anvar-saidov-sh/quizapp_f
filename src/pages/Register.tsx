import { ArrowBack } from "@mui/icons-material";
import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router";
import Footer from "../components/Footer";

const Register: React.FC = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState<"creator" | "taker" | null>(null);
  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-sm">
        <button
          onClick={handleBack}
          className="text-blue-600 dark:text-blue-400 text-sm font-medium"
        >
          <ArrowBack sx={{
            fontSize: '25px'
          }} /> Back
        </button>
        <h1 className="text-base font-semibold">Register</h1>
        <div className="w-12" />
      </div>

      <div className="flex-grow flex flex-col items-center justify-center px-6">
        <div className="w-full max-w-sm bg-white dark:bg-gray-800 rounded-2xl shadow-md p-6">
          <h2 className="text-center text-xl font-semibold mb-5">
            Create Account
          </h2>

          <form className="flex flex-col gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Full Name
              </label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Confirm  Password
              </label>
              <input
                type="password"
                id="password"
                placeholder="Confirm your password"
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-lg text-sm bg-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="flex gap-2">
              {["creator", "taker"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setRole(r as "creator" | "taker")}
                  className={`flex-1 py-2 rounded-md border text-sm font-medium transition-colors
                    ${role === r
                      ? "bg-blue-600 text-white border-blue-600"
                      : "bg-transparent border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300"
                    }`}
                >
                  {r === "creator" ? "Test Creator" : "Test Taker"}
                </button>
              ))}
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium text-sm py-2 rounded-lg transition-colors"
            >
              Register
            </button>
          </form>

          <p className="text-sm text-center text-gray-500 dark:text-gray-400 mt-4">
            Already have an account?{" "}
            <NavLink
              to="/login"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Login
            </NavLink>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
