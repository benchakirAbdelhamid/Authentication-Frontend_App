import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import Dashboard from "./pages/Dashboard";
import Cookies from "js-cookie";
import RequireAuth from "./components/auth/RequireAuth";

import 'react-loading-skeleton/dist/skeleton.css'

function App() {
  const accessToken = Cookies.get("accessToken");
  return (
    <>

      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="auth">
            <Route
              path="login"
              element={
                accessToken ? <Navigate to="/dashboard" replace /> : <Login />
              }
            />
            <Route
              path="signup"
              element={
                accessToken ? <Navigate to="/dashboard" replace /> : <Signup />
              }
            />
          </Route>
          <Route path="dashboard" element={<Layout />}>
            <Route
              index
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
            <Route
              path="blogs"
              element={
                <RequireAuth>
                  <Blogs />
                </RequireAuth>
              }
            />
            <Route
              path="contact"
              element={
                <RequireAuth>
                  <Contact />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="*" element={"not found"} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
