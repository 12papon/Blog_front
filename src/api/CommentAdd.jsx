import BlogInstance from "./BlogInstance";

export const AddComment = async (commentData) => {
  try {
    const response = await BlogInstance.post("/postcomment", commentData);
    return response.data;
  } catch (err) {
    return {
      message: "comment not found",
      error: err.message,
    };
  }
};
