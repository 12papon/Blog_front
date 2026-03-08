import BlogInstance from "./BlogInstance";

export const AllPosts = async () => {
  const res = await BlogInstance.get("/posts");
  return res.data;
};
