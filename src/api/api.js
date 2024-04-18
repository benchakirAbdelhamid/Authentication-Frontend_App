import axios from "axios";
import Cookies from "js-cookie";

const apiClient = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: 'https://authentication-app-ud0k.onrender.com',
  // baseURL: "http://localhost:4000",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    // 'Authorization': `Bearer ${token}`
  },
  withCredentials: true,
});

export async function SignUp(valuesInputes) {
  try {
    const response = await apiClient.post("/auth/register", valuesInputes);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
export async function login(valuesInputes) {
  try {
    const response = await apiClient.post("/auth/login", valuesInputes);
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function getUsers(token) {
  try {
    const response = await apiClient.get("/users", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response;
  } catch (error) {
    // console.log("error ==>", error);
    if (
      error.response &&
      error.response.data.message === "Invalid token" &&
      error.response.status === 401
    ) {
      console.log(
        "Data not found:",
        error.message,
        "==== ",
        error.response.data.message
      );
      // refresh the token
      await refreshToken();
      const responsed = await apiClient.get("/users", {
        headers: {
          Authorization: `Bearer ${Cookies.get("accessToken")}`,
        },
      });
      // return response;
      console.log("new response ", responsed);
      return responsed;
    } else {
      console.log("Other error occurred:", error);
      console.log('your login has expired')
      // Handle other types of errors (e.g., network issues, server errors)
    }
  }
}

async function refreshToken() {
  try {
    const newAccessToken = await apiClient.get("/auth/refresh");
    if (newAccessToken?.data) {
      Cookies.set("accessToken", newAccessToken.data.accessToken);
      console.log(
        "fetching refresh token api ==> ",
        newAccessToken.data.accessToken
      );
    }
  } catch (error) {
    console.error(error);
  }
}

export async function logout() {
  try {
    const response = await apiClient.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function testFetch() {
  try {
    const response = await apiClient.get("/test");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function fetch_cookies() {
  // fetch(`http://localhost:4000/get-cookie`, {
  //   credentials: "include",
  // })
  //   .then((res) => res.json())
  //   .then((data) => console.log(data));
  try {
    const response = await apiClient.get("/get-cookie");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function add_cookies() {
  try {
    const response = await apiClient.get("/set-cookie");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}

export async function remove_cookies() {
  try {
    const response = await apiClient.get("/delete-cookie");
    return response.data;
  } catch (error) {
    console.error(error);
  }
}
