import React from "react";

import { Link } from "react-router-dom";
import TopPosts from "./TopPosts";

const Home = () => {
  return (
    <>
      <div className="relative bg-gradient-to-r from-blue-600 to-indigo-700 h-[500px] flex items-center justify-center text-white overflow-hidden">
        {/* ব্যাকগ্রাউন্ড ডেকোরেশন (ঐচ্ছিক) */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <img
            src="https://images.unsplash.com"
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* মেইন কন্টেন্ট */}
        <div className="relative z-10 text-center px-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
            আপনার চিন্তা ও গল্পের{" "}
            <span className="text-yellow-400">নতুন ঠিকানা</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-blue-100">
            প্রযুক্তি, জীবনযাত্রা এবং সৃজনশীলতার দুনিয়ায় আপনাকে স্বাগতম। পড়ুন,
            লিখুন এবং বিশ্বের সাথে শেয়ার করুন।
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/Blog"
              className="bg-white text-blue-600 px-8 py-3 rounded-full font-bold hover:bg-yellow-400 hover:text-blue-900 transition-all shadow-lg"
            >
              ব্লগ পড়া শুরু করুন
            </Link>
            <button className="border-2 border-white text-white px-8 py-3 rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all">
              নিজের ব্লগ লিখুন
            </button>
          </div>
        </div>

        {/* নিচের দিকে একটি স্টাইলিশ কার্ভ (Shape Divider) */}
        <div className="absolute bottom-0 w-full overflow-hidden leading-[0]">
          <svg
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-full h-16 fill-white"
          >
            <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.83C51.17,101.59,103.49,105.51,155.19,102.34,228.47,97.85,271,76,321.39,56.44Z"></path>
          </svg>
        </div>
      </div>
      <TopPosts />
    </>
  );
};

export default Home;
