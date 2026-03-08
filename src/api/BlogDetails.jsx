import BlogInstance from "./BlogInstance";

export const BlogPostDetails = async (id) => {
  try {
    const response = await BlogInstance.get(`/posts/${id}`);
    return response.data;
  } catch (err) {
    return {
      message: "Data not found for fatching Problem",
      error: err.message,
    };
  }
};
