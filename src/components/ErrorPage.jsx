import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-full p-8">
      <div className="flex flex-col justify-center items-center">
        <h1 className="font-extrabold text-7xl py-2 text-red-600">404</h1>
        <h3 className="text-4xl font-bold pb-4 text-gray-600">This Page Not Fount !</h3>
        <button className="btn btn-primary">
          <Link to="/">Go To Home </Link>
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
