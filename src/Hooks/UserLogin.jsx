import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router";
import { useAuth } from "../Context/AuthContext";
import { loginUser } from "../api/Auth/AuthApi";

export const userLogin = () => {
  const queryClient = useQueryClient();
  const { login } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: loginUser,
    onSuccess: (data) => {
      // ১. কনটেক্সট ও লোকাল স্টোরেজ আপডেট (blogUser নামে সেভ হবে)
      login(data.user);
      // ২. TanStack Query ক্যাশ আপডেট (নেভবার ইন্সট্যান্টলি বদলে যাবে)
      queryClient.setQueriesData(["AuthUser"], data.user);
      console.log("লগইন সফল!");
      setTimeout(() => {
        navigate("/");
      }, 600);
    },
    onError: (err) => {
      alert("Login error", err);
      //    alert(error.response?.data?.message || "ইমেইল বা পাসওয়ার্ড ভুল!");
    },
  });
};
