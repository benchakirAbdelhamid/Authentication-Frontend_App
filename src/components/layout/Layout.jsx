import React from "react";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { logout } from "../../api/api";
import Cookies from "js-cookie";

const Layout = () => {
  const navigate = useNavigate()

  const handleLogout = async () => {
    const responselogout = await logout();
    Cookies.remove("accessToken");
    navigate('/auth/login')
    console.log(responselogout);
    // window.location.reload()
    // console.log('dd')
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="blogs">Blogs</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <button type="button" onClick={handleLogout}>
              logout
            </button>
          </li>
        </ul>
      </nav>

      <br />

      <Outlet />
    </div>
  );
};

export default Layout;
