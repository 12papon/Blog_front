import axios from "axios";

//For universel instence BlogInstance
const BlogInstance = axios.create({
  baseURL: "http://localhost:8000/blog",
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export default BlogInstance;
