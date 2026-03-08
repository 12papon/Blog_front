import { useState } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { BlogPostDetails } from "../api/BlogDetails";
import { useAuth } from "../Context/AuthContext";
import CommentPopup from "../Components/Common/CommentPopup";

const BlogDetails = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const { id } = useParams(); // URL থেকে পোস্ট আইডি নেওয়া
  const { user } = useAuth();
  const BASE_URL = "http://localhost:8000/";

  // ১. পোস্টের ডাটা ফেচ করা
  const {
    data: post,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["post", id],
    queryFn: () => BlogPostDetails(id),
  });

  if (isLoading) return <div className="text-center mt-10">লোড হচ্ছে...</div>;
  if (error)
    return (
      <div className="text-red-500 text-center">
        সমস্যা হয়েছে: {error.message}
      </div>
    );

  return (
    <div className="max-w-4xl mx-auto p-5">
      {/* পোস্টের ডিটেইলস */}
      {post.map((item) => (
        <article
          key={item._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden p-6"
        >
          <img
            src={`${BASE_URL}${item.image}`}
            alt={item.title}
            className="w-full h-64 object-cover rounded-md"
          />
          <h1 className="text-3xl font-bold mt-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-gray-500 my-4">
            <span>লেখক: {item.auth.name}</span>
            <span>তারিখ: {new Date(item.createdAt).toLocaleDateString()}</span>
          </div>
          <p className="text-gray-700 leading-relaxed text-lg">
            {item.content}
          </p>
        </article>
      ))}

      {/* কমেন্ট সেকশন - এখানে আপনার পপআপ বা লিস্ট থাকবে */}
      <div className="mt-10">
        <h2
          onClick={() => setIsPopupOpen(true)}
          className="text-2xl font-semibold mb-5 cursor-pointer hover:text-purple-600 inline"
        >
          পাঠক প্রতিক্রিয়া
        </h2>
        {/* আপনি যে পপআপটি বানিয়েছেন সেটি এখানে কল করতে পারেন */}
        <CommentPopup
          isOpen={isPopupOpen}
          onClose={() => setIsPopupOpen(false)}
          postId={id}
          authName={user.username}
          authEmail={user.email}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
