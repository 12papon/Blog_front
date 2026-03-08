import React from "react";

const LoginLoader = () => {
  return (
    // পুরো স্ক্রিন জুড়ে একটি ট্রান্সপারেন্ট ব্যাকগ্রাউন্ড
    <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-white/60 backdrop-blur-sm">
      <div className="relative flex items-center justify-center">
        {/* বাইরের ডাবল লেয়ার স্পিনার */}
        <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>

        {/* মাঝখানে একটি ছোট পালস ইফেক্ট */}
        <div className="absolute w-6 h-6 bg-blue-600 rounded-full animate-ping opacity-75"></div>
      </div>

      {/* প্রফেশনাল মেসেজ */}
      <h3 className="mt-6 text-lg font-semibold text-gray-700 tracking-wide animate-pulse">
        Signing you in...
      </h3>
      <p className="text-sm text-gray-500 mt-1">
        অনুগ্রহ করে কিছুক্ষণ অপেক্ষা করুন
      </p>
    </div>
  );
};

export default LoginLoader;
