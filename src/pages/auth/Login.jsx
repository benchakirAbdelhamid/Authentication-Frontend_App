import React from "react";
import LoginForm from "../../components/auth/LoginForm";
import { login } from "../../api/api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const signin = async (valuesInputes) => {
    const signinRequest = await login(valuesInputes);
    if (signinRequest.accessToken) {
      Cookies.set("accessToken", signinRequest.accessToken);
      navigate("/dashboard");
    }
    if (signinRequest.message) {
      toast.success(signinRequest.message);
    }
    console.log("====>", signinRequest);
  };

  return (
    <div className="h-[80vh] pt-20 ">
      <h4 className="text-center block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        sign in
      </h4>
      <LoginForm signin={signin} />
    </div>
  );
};

export default Login;
