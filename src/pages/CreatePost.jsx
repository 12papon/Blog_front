import React, { useState } from "react";
import { Image as ImageIcon, X, Send, Type, AlignLeft } from "lucide-react";
import { useMutation } from "@tanstack/react-query";
import { AllPost } from "../api/Post/Post";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imagePreview, setImagePreview] = useState(null);
  const [upFile, setupFile] = useState(null);

  // ইমেজ প্রিভিউ হ্যান্ডলার
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setupFile(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const mutation = useMutation({
    mutationFn: (formDt) => AllPost(formDt),

    onSuccess: (data) => {
      alert(data.data.message);
      console.log(data);
    },
    onError: (error) => {
      alert(error.response?.data.error);
      console.error("ভুল হয়েছে:", error.response?.data);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    //create form Data
    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("postImage", upFile);
    mutation.mutate(formData);
    setTitle("");
    setContent("");
    setImagePreview(null);
    setupFile(null);
  };

  return (
    <form action="/blog/upload" onSubmit={handleSubmit}>
      <div className="min-h-screen bg-gray-500 pb-12 ">
        {/* হেডার / নেভিগেশন বার */}
        <div className="bg-white border-b sticky top-0 z-50 px-4 py-3">
          <div className="max-w-3xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-gray-800">নতুন ব্লগ লিখুন</h1>
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-medium flex items-center gap-2 transition-all shadow-md active:scale-95"
            >
              <Send size={18} /> পাবলিশ
            </button>
          </div>
        </div>

        <main className="max-w-3xl mx-auto mt-6 px-4">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {/* ইমেজ আপলোড সেকশন */}
            <div className="relative group bg-gray-100 h-52 md:h-72 flex items-center justify-center border-b border-dashed border-gray-300">
              {imagePreview ? (
                <>
                  <img
                    src={imagePreview}
                    alt="Preview"
                    className="w-full h-full object-cover"
                  />
                  <button
                    onClick={() => setImagePreview(null)}
                    className="absolute top-4 right-4 bg-black/50 p-2 rounded-full text-white hover:bg-black"
                  >
                    <X size={20} />
                  </button>
                </>
              ) : (
                <label className="cursor-pointer flex flex-col items-center gap-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <div className="bg-white p-4 rounded-full shadow-sm">
                    <ImageIcon size={40} />
                  </div>
                  <span className="font-medium">কাভার ফটো যুক্ত করুন</span>
                  <input
                    type="file"
                    name="postImg"
                    className="hidden"
                    onChange={handleImageChange}
                    accept="image/*"
                  />
                </label>
              )}
            </div>

            <div className="p-6 md:p-10 space-y-6">
              {/* টাইটেল ইনপুট */}
              <div className="flex items-start gap-4">
                <Type className="text-gray-400 mt-2 hidden md:block" />
                <input
                  type="text"
                  placeholder="ব্লগের শিরোনাম (Title)..."
                  className="w-full text-3xl md:text-4xl font-extrabold outline-none placeholder:text-gray-300 border-none focus:ring-0 p-0"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <hr className="border-gray-100" />

              {/* কন্টেন্ট টেক্সট এরিয়া */}
              <div className="flex items-start gap-4">
                <AlignLeft className="text-gray-400 mt-1 hidden md:block" />
                <textarea
                  placeholder="আপনার গল্পটি শুরু করুন..."
                  className="w-full min-h-[300px] text-lg md:text-xl outline-none placeholder:text-gray-300 border-none focus:ring-0 p-0 resize-none leading-relaxed"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* মোবাইল ফ্রেন্ডলি টিপস বা সেটিংস */}
          <p className="text-center text-gray-400 text-sm mt-6">
            অটো-সেভ সক্রিয় আছে। আপনার পোস্টটি ড্রাফট হিসেবে জমা থাকবে।
          </p>
        </main>
      </div>
    </form>
  );
};

export default CreatePost;
