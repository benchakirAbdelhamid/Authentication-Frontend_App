import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "../../styles/Form.module.css";

const LoginForm = ({ signin }) => {
  const [userInputs, setUserInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(userInputs);
    signin(userInputs);
    setUserInputs({
      email: "",
      password: "",
    });
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={handleSubmit}
        className="max-w-screen-lg mt-8 mb-2 w-80 sm:w-96"
      >
        <div className="flex flex-col gap-6 mb-1">
          <label
            className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
            htmlFor="email"
          >
            Your Email
          </label>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              placeholder="name@mail.com"
              required
              name="email"
              type="email"
              value={userInputs.email}
              onChange={(e) => handleChange(e)}
              id="email"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
          </div>
          <label
            className="block -mb-3 font-sans text-base antialiased font-semibold leading-relaxed tracking-normal text-blue-gray-900"
            htmlFor="password"
          >
            Your Password
          </label>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              placeholder="..."
              required
              name="password"
              type="password"
              value={userInputs.password}
              onChange={(e) => handleChange(e)}
              id="password"
              className="peer h-full w-full rounded-md border border-blue-gray-200 border-t-transparent !border-t-blue-gray-200 bg-transparent px-3 py-3 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:!border-t-gray-900 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
            />
          </div>
        </div>
        <button
          className="mt-6 block w-full select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="submit"
        >
          sign in
        </button>
        <p className="block mt-4 font-sans text-base antialiased font-normal leading-relaxed text-center text-gray-700">
          Already have an account?
          <Link to="/auth/signup">
            <a href="#" className="font-medium text-gray-900">
              Sign up
            </a>
          </Link>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
