import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Heart, MessageSquare, Share2 } from "lucide-react";
import CommentPopup from "./CommentPopup";
import { useAuth } from "../../Context/AuthContext";

const BlogCard = ({ post }) => {
  const { user } = useAuth();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likesCount || 0);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const BASE_URL = "http://localhost:8000/";

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikes(isLiked ? likes - 1 : likes + 1);
    // এখানে আপনার API কল (axios/fetch) হবে
  };

  return (
    <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden mb-6 p-5">
      {/* ১. ইমেজ সেকশন */}
      <Link to={`/blog/${post._id}`}>
        {post.image && (
          <div className="w-full h-56 overflow-hidden mb-1">
            <h1 className="text-2xl font-bold text-taupe-700 mb-2">
              Author: {post?.auth?.name}
            </h1>
            <img
              src={`${BASE_URL}${post.image}`}
              alt={post.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        {/* ১. ব্লগের মূল অংশ */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{post.title}</h2>
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {post.content.substring(0, 150)}...
        </p>
      </Link>
      {/* ২. ইন্টারেকশন সেকশন (Like, Comment, Share) */}
      <div className="flex items-center justify-between border-t pt-4 mt-2">
        <div className="flex gap-4">
          {/* লাইক বাটন */}
          <button
            onClick={handleLike}
            className={`flex items-center gap-1.5 transition-colors ${isLiked ? "text-red-500" : "text-gray-500 hover:text-red-500"}`}
          >
            <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
            <span className="font-medium">{likes}</span>
          </button>

          {/* কমেন্ট বাটন */}
          <button
            onClick={() => {
              setIsPopupOpen(true);
            }}
            className="flex items-center gap-1.5 text-gray-500 hover:text-blue-500 transition-colors"
          >
            <MessageSquare size={20} />
            <span className="font-medium">কমেন্ট</span>
          </button>
          <CommentPopup
            isOpen={isPopupOpen}
            onClose={() => setIsPopupOpen(false)}
            postId={post._id}
            authName={user?.username}
            authEmail={user?.email}
          />
        </div>

        {/* শেয়ার বাটন */}
        <button className="text-gray-500 hover:text-green-600 transition-colors">
          <Share2 size={20} />
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
