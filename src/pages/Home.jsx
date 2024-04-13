import React from "react";
import { Link } from "react-router-dom";
// import { Button } from "@material-tailwind/react";
const Home = () => {
  return (
    <div>
      <h2>Home page</h2>

      <hr />
      <Link to="auth/login">
        <button
          className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Sign In
        </button>
      </Link>
      <Link to="auth/signup">
        <button
          className="select-none rounded-lg border border-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
        >
          Sign Up
        </button>
      </Link>
      {/* {import.meta.env.VITE_NODE_ENV} */}
    </div>
  );
};

export default Home;
