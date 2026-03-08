import BlogInstance from "../BlogInstance";
export const AllPost = async (data) => {
  return await BlogInstance.post("/upload", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
