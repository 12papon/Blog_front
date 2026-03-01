import BlogInstance from "../BlogInstance";

export const SignupUser = async (userData) => {
  const response = await BlogInstance.post("/signup", userData);
  return response.data;
};
// Credentials হিসেবে ইমেইল এবং পাসওয়ার্ড যাবে
export const loginUser = async (Credentials) => {
  const response = await BlogInstance.post("/login", Credentials);
  return response.data;
};
