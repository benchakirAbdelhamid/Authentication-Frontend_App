import React from "react";
import Cookies from "js-cookie";
import { add_cookies, fetch_cookies, remove_cookies, SignUp, testFetch } from "../api/api";

const Blogs = () => {

  const signUp = async () => {
      const signUpRequest = await SignUp()
      if(signUpRequest.accessToken){
        Cookies.set('accessToken', signUpRequest.accessToken)
      }
      console.log(signUpRequest)
  };


  const get_cookie = async () => {
    const fetched_cookies = await fetch_cookies()
    console.log(fetched_cookies)
  };
  const set_cookie = async() => {
    const added_cookies = await add_cookies()
    console.log(added_cookies)
  };
  const delete_cookie = async() => {
    const removed_cookies = await remove_cookies()
    console.log(removed_cookies)
  };

  const setbrowzer = () => {
    Cookies.set("myToken", "my token browzer", { expires: 7 });
  };
  const getbrowzer = () => {
    console.log(Cookies.get("myToken"));
  };

  const deletebrowzer = () => {
    Cookies.remove("myToken");
  };

  return (
    <div>
      Blogs
      <br />
      <br />
      <hr />
      <hr />
      <button onClick={get_cookie}>get</button>
      <hr />
      <hr />
      <button onClick={set_cookie}>set</button>
      <hr />
      <hr />
      <button onClick={delete_cookie}>delete</button>
      <hr />
      <hr />
      <button onClick={setbrowzer}>set cookies browzer</button>
      <br />
      <hr />
      <button onClick={getbrowzer}>get cookies browzer</button>
      <br />
      <hr />
      <button onClick={deletebrowzer}>delete cookies browzer</button>
      <br />
      <br />
      <hr />
      <hr />
      <br />
      <br />
      <br />
      <br />
      <br />
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default Blogs;
