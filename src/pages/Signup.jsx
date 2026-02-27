import React, { useState } from "react";
import { Link } from "react-router";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg border border-white/20 rounded-3xl shadow-2xl p-10 text-white">
        <h2 className="text-4xl font-extrabold text-center mb-2 tracking-tight">
          স্বাগতম!
        </h2>
        <p className="text-center text-white/70 mb-8">
          আপনার ব্লগের যাত্রা শুরু হোক এখান থেকেই
        </p>

        <form className="space-y-5">
          {/* ইউজারনেম */}
          <div className="relative group">
            <input
              type="text"
              name="username"
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-white/60 focus:bg-white/20 transition-all placeholder-white/50"
              placeholder="ইউজারনেম"
              onChange={handleChange}
            />
          </div>

          {/* ইমেইল */}
          <div className="relative group">
            <input
              type="email"
              name="email"
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-white/60 focus:bg-white/20 transition-all placeholder-white/50"
              placeholder="ইমেইল এড্রেস"
              onChange={handleChange}
            />
          </div>

          {/* পাসওয়ার্ড */}
          <div className="relative group">
            <input
              type="password"
              name="password"
              required
              className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 outline-none focus:border-white/60 focus:bg-white/20 transition-all placeholder-white/50"
              placeholder="পাসওয়ার্ড"
              onChange={handleChange}
            />
          </div>

          {/* সাইনআপ বাটন */}
          <button
            type="submit"
            className="w-full bg-white text-indigo-600 font-bold py-3 rounded-xl hover:bg-opacity-90 active:scale-[0.98] transition-all shadow-lg mt-4"
          >
            অ্যাকাউন্ট তৈরি করুন
          </button>
        </form>

        <div className="mt-8 text-center text-sm">
          <span className="text-white/60">ইতিমধ্যেই অ্যাকাউন্ট আছে?</span>
          <Link to="/login" className="ml-2 font-bold hover:underline">
            লগইন
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
