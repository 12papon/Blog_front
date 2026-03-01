import React, { useState } from "react";
import { Link } from "react-router";
import { useSignup } from "../Hooks/UserSignUp";

const Signup = () => {
  // হুক থেকে প্রয়োজনীয় জিনিসগুলো নিয়ে আসা
  const { mutate, isLoading, isError, error } = useSignup();
  console.log(error);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  // ভ্যালিডেশন লজিক
  const validate = () => {
    let newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // ইমেইল ফরম্যাট চেক
    if (!formData.username.trim()) {
      newErrors.username = "ইউজারনেম প্রয়োজন!";
    } else if (formData.username.trim().length < 3) {
      newErrors.username = "ইউজারনেম অন্তত ৩ অক্ষরের হতে হবে।";
    }

    if (!formData.email) {
      newErrors.email = "ইমেইল প্রয়োজন!";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "সঠিক ইমেইল এড্রেস দিন।";
    }

    if (!formData.password) {
      newErrors.password = "পাসওয়ার্ড প্রয়োজন!";
    } else if (formData.password.length < 4) {
      newErrors.password = "পাসওয়ার্ড অন্তত ৪ অক্ষরের হতে হবে।";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (validate()) {
      console.log("Form data submiting...", formData);

      mutate(formData, {
        onSuccess: () => {
          console.log("Success fully submitted");
        },
        onError: (err) => {
          console.log(err);
        },
      });
    } else {
      console.log("Validation error");
    }
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
            onClick={handleSubmit}
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
