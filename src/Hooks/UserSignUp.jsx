import { useMutation, useQueryClient } from "@tanstack/react-query";
import { SignupUser } from "../api/Auth/AuthApi";
import { useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { UserProfileMenuUpdate } from "./UserProfileMenuUpdate";
// এই হুকটি আপনি আপনার সাইনআপ পেজে ইম্পোর্ট করবেন
export const useSignup = () => {
  const queryClient = useQueryClient();
  //Navigation object
  const navigate = useNavigate();
  //Login context value update with signup
  const { login } = useAuth();
  return useMutation({
    mutationFn: SignupUser, // এটি আপনার তৈরি করা এক্সিওস পোস্ট ফাংশন
    onSuccess: (data) => {
      // ডেটা সফলভাবে ডাটাবেজে গেলে যা হবে
      console.log("সাকসেস:", data);
      login(data.user);
      queryClient.setQueriesData(["AuthUser"], data.user);
      alert("সাইনআপ সফল হয়েছে!"); // আপনি চাইলে toast.success() ব্যবহার করতে পারেন
      setTimeout(() => {
        navigate("/");
      }, 1500);
    },
    onError: (error) => {
      // কোনো এরর হলে যা হবে
      console.log("Error", error);
      // console.error("এরর:", error.response?.data?.message);
    },
  });
};
