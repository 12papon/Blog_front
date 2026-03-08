import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Github,
  Mail,
  Send,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300 pt-16 pb-8 px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* ১. ব্র্যান্ড সেকশন */}
          <div className="space-y-5">
            <h2 className="text-3xl font-extrabold text-white tracking-tight">
              Tech<span className="text-blue-500">Flow</span>
            </h2>
            <p className="text-sm leading-relaxed">
              আপনার প্রতিদিনের টেকনোলজি এবং প্রোগ্রামিং জ্ঞানের বিশ্বস্ত উৎস।
              আমরা বিশ্বাস করি জ্ঞান শেয়ার করলেই বাড়ে।
            </p>
            {/* সোশ্যাল মিডিয়া আইকনসমূহ */}
            <div className="flex space-x-4">
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-sky-400 hover:text-white transition-all duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-pink-600 hover:text-white transition-all duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-700 hover:text-white transition-all duration-300"
              >
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* ২. ক্যাটাগরি (ব্লগের জন্য জরুরি) */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-10 after:h-1 after:bg-blue-500 after:left-0 after:-bottom-2">
              Categories
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Web Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  UI/UX Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Machine Learning
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Career Advice
                </a>
              </li>
            </ul>
          </div>

          {/* ৩. কুইক লিঙ্কস */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-10 after:h-1 after:bg-blue-500 after:left-0 after:-bottom-2">
              Resources
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Become a Writer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition">
                  Contact Support
                </a>
              </li>
            </ul>
          </div>

          {/* ৪. নিউজলেটার */}
          <div>
            <h3 className="text-white text-lg font-bold mb-6 relative after:content-[''] after:absolute after:w-10 after:h-1 after:bg-blue-500 after:left-0 after:-bottom-2">
              Stay Updated
            </h3>
            <p className="text-sm mb-4">
              সেরা ব্লগগুলো সরাসরি ইনবক্সে পেতে সাবস্ক্রাইব করুন।
            </p>
            <form className="flex flex-col space-y-2">
              <div className="relative">
                <input
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:border-blue-500 transition"
                />
                <button className="absolute right-2 top-1.5 p-1 text-blue-500 hover:text-blue-400">
                  <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* কপিরাইট সেকশন */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <p>
            © {new Date().getFullYear()} TechFlow Blog. Made with ❤️ for
            Developers.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white">
              Terms
            </a>
            <a href="#" className="hover:text-white">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-white">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
