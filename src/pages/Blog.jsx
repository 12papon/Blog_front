import React from "react";
import BlogCard from "../Components/Common/BlogCard";
import TopPosts from "./TopPosts";
import { AllPosts } from "../api/GetPost";
import { useQuery } from "@tanstack/react-query";

const Blog = () => {
  // ধরুন এই ডেটা আপনার API থেকে আসছে
  const { data, isLoading, isError } = useQuery({
    queryKey: ["PostData"],
    queryFn: AllPosts,
  });
  console.log(data);

  // const allPosts = [
  //   {
  //     id: 1,
  //     title: "রিয়্যাক্ট শেখার সহজ উপায়",
  //     content: "রিয়্যাক্ট একটি চমৎকার লাইব্রেরি...",
  //     likesCount: 15,
  //     image:
  //       "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     id: 2,
  //     title: "নোড জেএস কি?",
  //     content: "সার্ভার সাইড ডেভেলপমেন্টের জন্য নোড...",
  //     likesCount: 20,
  //     image:
  //       "https://images.unsplash.com/photo-1761839259484-4741afbbdcbf?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  // ];
  return (
    <div className="max-w-xl mx-auto py-10">
      <h1 className="text-2xl font-bold mb-6">সবগুলো ব্লগ</h1>
      {data?.map((post) => (
        <BlogCard key={post._id} post={post} />
      ))}
    </div>
  );
};

export default Blog;
