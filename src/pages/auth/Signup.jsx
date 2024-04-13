import React from "react";
import SignUpForm from "../../components/auth/SignUpForm";
import { SignUp } from "../../api/api";
import Cookies from "js-cookie";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const signUp = async (valuesInputes) => {
    const signUpRequest = await SignUp(valuesInputes);
    if (signUpRequest.accessToken) {
      Cookies.set("accessToken", signUpRequest.accessToken);
      navigate("/dashboard");
    }
    if (signUpRequest.message) {
      toast.success(signUpRequest.message);
    }
    console.log(signUpRequest)
  };

  return (
    <div className="h-[80vh] pt-20 ">
      <h4 className="text-center block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
        Create new account
      </h4>
      <SignUpForm signUp={signUp} />
    </div>
  );
};

export default Signup;
