import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="text-center my-10">
      <h1 className="font-bold text-3xl text-red-500">Not Found</h1>
      <h2 className="font-2xl font-bold mb-4">404</h2>
      <Link to="/">
        <h2 className=" rounded-2xl px-2 py-1 border-1 inline font-bold">
          Go To Home
        </h2>
      </Link>
    </div>
  );
};

export default NotFound;
