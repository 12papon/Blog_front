import React, { useState } from "react";
import { X, Send, User } from "lucide-react";
import { useMutation, useQueryClient, useQuery } from "@tanstack/react-query";
import { AddComment } from "../../api/CommentAdd";
import { GetComment } from "../../api/CommentGet";
import Loader from "./Loader";
const CommentPopup = ({ isOpen, onClose, postId, authName, authEmail }) => {
  const [newComment, setNewComment] = useState("");
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data) => {
      console.log(data);

      return AddComment(data);
    },
    onSuccess: () => {
      setNewComment("");
      queryClient.invalidateQueries(["PostData"]);
    },
  });
  const { data } = useQuery({
    queryKey: ["comment", postId],
    queryFn: () => GetComment(postId),
  });

  const handleSubmit = () => {
    mutation.mutate({
      content: newComment,
      postId: postId,
      auth: {
        name: authName,
        email: authEmail,
      },
    });
  };
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      {/* মেইন পপআপ বক্স */}
      <div className="bg-white w-full max-w-lg rounded-2xl shadow-2xl flex flex-col max-h-[85vh]">
        {/* হেডার */}
        <div className="p-4 border-b flex justify-between items-center bg-gray-50 rounded-t-2xl">
          <h3 className="font-bold text-lg text-gray-800">
            Comments ({data.length})
          </h3>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-200 rounded-full transition"
          >
            <X size={20} className="text-gray-600" />
          </button>
        </div>

        {/* কমেন্ট লিস্ট (স্ক্রলেবল এরিয়া) */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 custom-scrollbar">
          {data.length > 0 ? (
            data.map((comment, index) => (
              <div key={index} className="flex gap-3 items-start">
                <div className="bg-blue-100 p-2 rounded-full">
                  <User size={16} className="text-blue-600" />
                </div>
                <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none flex-1">
                  <p className="text-xs font-bold text-gray-700">
                    {comment.auth.name}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    {comment.content}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-400 py-10">
              এখনো কোনো কমেন্ট নেই। প্রথম কমেন্টটি আপনিই করুন!
            </p>
          )}
        </div>

        {/* কমেন্ট ইনপুট বক্স (নিচে ফিক্সড) */}
        <div className="p-4 border-t bg-gray-50 rounded-b-2xl">
          <div className="relative flex items-center">
            <textarea
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="একটি কমেন্ট লিখুন..."
              className="w-full bg-white border border-gray-300 rounded-xl px-4 py-2 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[45px] max-h-[100px] resize-none"
            />
            <button
              onClick={handleSubmit}
              className="absolute right-2 p-2 text-blue-600 hover:bg-blue-50 rounded-full transition"
            >
              <Send size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentPopup;
