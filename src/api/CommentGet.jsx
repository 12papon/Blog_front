import BlogInstance from "./BlogInstance";

export const GetComment = async (postId) => {
  try {
    const response = await BlogInstance.get(`/getcomment/${postId}`);
    return response.data;
  } catch (err) {
    return {
      message: "Comment not found",
      error: err.message,
    };
  }
};
