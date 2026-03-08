import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      {/* মেইন এনিমেটেড রিং */}
      <div className="relative w-16 h-16">
        {/* বাইরের ঝাপসা রিং */}
        <div className="absolute inset-0 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin opacity-30"></div>
        {/* ভেতরের মেইন রিং */}
        <div className="absolute inset-0 border-4 border-transparent border-t-blue-600 rounded-full animate-spin"></div>
      </div>

      {/* লোডিং টেক্সট উইথ এনিমেশন */}
      <p className="text-gray-500 font-medium text-sm animate-pulse tracking-widest uppercase">
        Loading Posts...
      </p>
    </div>
  );
};

export default Loader;
