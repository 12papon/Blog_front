import React, { useState } from "react";
import {
  AiOutlineMail,
  AiOutlineLock,
  AiOutlineGoogle,
  AiOutlineGithub,
} from "react-icons/ai";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Attempt:", { email, password });
    // এখানে আপনার লগইন লজিক বা Firebase/Auth API কল করবেন
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-2xl overflow-hidden p-8">
        {/* হেড সেকশন */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-800">
            Welcome Back!
          </h2>
          <p className="text-gray-500 mt-2">আপনার অ্যাকাউন্টে লগইন করুন</p>
        </div>

        {/* লগইন ফর্ম */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="relative">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Email
            </label>
            <div className="flex items-center mt-1">
              <span className="absolute left-3 text-gray-400 text-xl">
                <AiOutlineMail />
              </span>
              <input
                type="email"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                placeholder="example@mail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <div className="relative">
            <label className="text-sm font-semibold text-gray-600 ml-1">
              Password
            </label>
            <div className="flex items-center mt-1">
              <span className="absolute left-3 text-gray-400 text-xl">
                <AiOutlineLock />
              </span>
              <input
                type="password"
                required
                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:border-blue-500 focus:bg-white transition-all"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center text-gray-500 cursor-pointer">
              <input
                type="checkbox"
                className="mr-2 rounded border-gray-300 focus:ring-blue-500"
              />
              Remember me
            </label>
            <a href="#" className="text-blue-600 font-semibold hover:underline">
              Forgot password?
            </a>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-bold py-3 rounded-xl hover:bg-blue-700 shadow-lg shadow-blue-200 transition-all transform active:scale-95"
          >
            Log In
          </button>
        </form>

        {/* সোশ্যাল লগইন */}
        <div className="mt-8">
          <div className="relative flex py-3 items-center">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="flex-shrink mx-4 text-gray-400 text-sm">
              Or continue with
            </span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-6">
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
              <AiOutlineGoogle className="text-xl text-red-500" /> Google
            </button>
            <button className="flex items-center justify-center gap-2 py-2.5 border border-gray-200 rounded-xl hover:bg-gray-50 transition-all">
              <AiOutlineGithub className="text-xl text-gray-800" /> Github
            </button>
          </div>
        </div>

        <p className="text-center text-gray-600 mt-8">
          Don't have an account?{" "}
          <a href="#" className="text-blue-600 font-bold hover:underline">
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
