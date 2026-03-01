import React, { useState } from "react";
import { HiMenuAlt3, HiOutlineX } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineRead,
  AiOutlineInfoCircle,
  AiOutlineSetting,
  AiOutlineLogout,
  AiOutlineUser,
} from "react-icons/ai";
import { RiArrowDownSLine } from "react-icons/ri";
import { Link } from "react-router";
import { useAuth } from "../../Context/AuthContext";
import { UserProfileMenuUpdate } from "../../Hooks/UserProfileMenuUpdate";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // মোবাইল মেনু স্টেট
  const { data: user } = UserProfileMenuUpdate();
  const { logout, login } = useAuth();
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const [isProfileOpen, setIsProfileOpen] = useState(false); // প্রোফাইল ড্রপডাউন স্টেট

  // ইউজার লগইন করা আছে কি না তা চেক করার জন্য ডামি স্টেট (পরবর্তীতে আপনার Auth Logic বসাবেন)
  // const [isLoggedIn, setIsLoggedIn] = useState(user ? true : false);
  // console.log(isLoggedIn);
  const handleLogin = () => {
    login(user);
  };
  const handleLogout = () => {
    logout();
    queryClient.removeQueries(["AuthUser"]);
    navigate("/login");
  };

  const menuItems = [
    { name: "Home", icon: <AiOutlineHome />, link: "/" },
    { name: "Blogs", icon: <AiOutlineRead />, link: "/blog" },
    { name: "About", icon: <AiOutlineInfoCircle />, link: "/about" },
  ];

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* ১. বাম পাশে লোগো */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-2xl font-bold text-blue-600 cursor-pointer">
              <img
                src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
                alt=""
                className="h-18 w-13 rounded-full"
              />
            </span>
          </div>

          {/* ২. মাঝখানে মেনু (ডেক্সটপ) */}
          <div className="hidden md:flex space-x-8 items-center">
            {menuItems.map((item, index) => (
              <Link
                key={index}
                to={item.link}
                className="flex items-center gap-1 text-gray-700 hover:text-blue-600 font-medium transition"
              >
                <span className="text-lg">{item.icon}</span>
                {item.name}
              </Link>
            ))}
          </div>

          {/* ৩. ডান পাশে লগইন/প্রোফাইল */}
          <div className="hidden md:flex items-center relative">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsProfileOpen(!isProfileOpen)}
                  className="flex items-center gap-2 focus:outline-none"
                >
                  <img
                    src="https://img.freepik.com/free-vector/bird-colorful-gradient-design-vector_343694-2506.jpg?semt=ais_hybrid&w=740&q=80"
                    alt="User"
                    className="w-9 h-9 rounded-full border-2 border-blue-500 p-0.5"
                  />
                  <RiArrowDownSLine
                    className={`transition-transform ${isProfileOpen ? "rotate-180" : ""}`}
                  />
                </button>

                {/* প্রোফাইল ড্রপডাউন */}
                {isProfileOpen && (
                  <>
                    <div onClick={() => setIsProfileOpen(!isProfileOpen)}></div>
                    <div className="absolute right-0 mt-3 w-48 bg-white border border-gray-100 rounded-md shadow-xl py-2 animate-fade-in-down">
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50"
                      >
                        <AiOutlineUser /> Profile
                      </a>
                      <a
                        href="#"
                        className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-blue-50"
                      >
                        <AiOutlineSetting /> Settings
                      </a>
                      <hr className="my-1 border-gray-100" />
                      <button
                        onClick={handleLogout}
                        className="w-full flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50"
                      >
                        <AiOutlineLogout /> Logout
                      </button>
                    </div>
                  </>
                )}
              </div>
            ) : (
              // <button
              //   onClick={() => setIsLoggedIn(true)}
              //   className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              // >
              //   <AiOutlineUser className="text-lg" /> Login
              // </button>
              <Link
                to="/login"
                className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2 rounded-full hover:bg-blue-700 transition"
              >
                <AiOutlineUser className="text-lg" /> Login
              </Link>
            )}
          </div>

          {/* মোবাইল মেনু বাটন */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-3xl text-gray-700"
            >
              {isOpen ? <HiOutlineX /> : <HiMenuAlt3 />}
            </button>
          </div>
        </div>
      </div>

      {/* মোবাইল মেনু কন্টেন্ট */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-inner px-4 pt-2 pb-6 space-y-4">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href={item.link}
              className="flex items-center gap-3 text-gray-700 text-lg py-2"
            >
              {item.icon} {item.name}
            </a>
          ))}
          <hr />
          {user ? (
            <div className="space-y-4">
              <div className="flex items-center gap-3 font-bold text-blue-600">
                <img
                  src="https://via.placeholder.com"
                  className="rounded-full text-red-500"
                  alt=""
                />{" "}
                My Account
              </div>
              <a
                href="#"
                className="flex items-center gap-3 text-gray-600 pl-2"
              >
                {" "}
                <AiOutlineUser /> Profile
              </a>
              <button
                onClick={handleLogout}
                className="flex items-center gap-3 text-red-500 pl-2"
              >
                {" "}
                <AiOutlineLogout /> Logout
              </button>
            </div>
          ) : (
            <Link
              to="/login"
              className="w-full bg-blue-600 text-white py-2 rounded-lg"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
