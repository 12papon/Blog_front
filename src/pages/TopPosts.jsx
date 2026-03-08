import React from "react";
import { TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const TopPosts = () => {
  const allPosts = [
    {
      id: 1,
      title: "রিয়্যাক্ট শেখার সহজ উপায়",
      content: "রিয়্যাক্ট একটি চমৎকার লাইব্রেরি...",
      likesCount: 15,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      title: "নোড জেএস কি?",
      content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
      likesCount: 20,
      image:
        "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];
  // প্রথম ১০টি পোস্ট নেওয়া হচ্ছে
  const topTenPosts = allPosts.slice(0, 10);

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* সেকশন হেডার */}
        <div className="flex items-center justify-between mb-10">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-lg text-white">
              <TrendingUp size={24} />
            </div>
            <h2 className="text-3xl font-bold text-gray-800">সেরা ১০টি ব্লগ</h2>
          </div>
          <Link
            to="/blog"
            className="text-blue-600 font-semibold flex items-center gap-1 hover:underline"
          >
            সবগুলো দেখুন <ArrowRight size={18} />
          </Link>
        </div>

        {/* পোস্ট গ্রিড লেআউট */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {topTenPosts.map((post, index) => (
            <div
              key={post.id}
              className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 transition-all hover:shadow-md hover:-translate-y-1 group"
            >
              <div className="relative mb-3">
                {/* র‍্যাঙ্কিং নাম্বার ব্যাজ */}
                <span className="absolute -top-2 -left-2 bg-yellow-400 text-blue-900 font-bold w-8 h-8 flex items-center justify-center rounded-full shadow-sm text-sm z-10">
                  {index + 1}
                </span>
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-32 object-cover rounded-lg group-hover:opacity-90"
                />
              </div>

              <h3 className="font-bold text-gray-800 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors">
                {post.title}
              </h3>

              <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
                <span>{post.date || "২ মিনিট আগে"}</span>
                <span className="flex items-center gap-1">
                  🔥 {post.likesCount}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopPosts;
