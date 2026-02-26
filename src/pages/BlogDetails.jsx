import { useParams } from "react-router";

const BlogDetails = () => {
  const { id } = useParams();
  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default BlogDetails;
