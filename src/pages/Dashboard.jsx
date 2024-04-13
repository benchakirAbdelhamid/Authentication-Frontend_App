import React, { useEffect, useState } from "react";
import { getUsers } from "../api/api";
import Cookies from "js-cookie";
import moment from "moment";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Dashboard = () => {
  const [users, setUsers] = useState([]);

  const getAllUsers = async () => {
    const token = Cookies.get("accessToken");
    if (token) {
      const users = await getUsers(token);
      if (users.data && users.data.length > 0) {
        setUsers(users);
        console.log("frontend", users);
      }
    }
  };
  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <h2>Dashboard</h2>
      <h4>All Users</h4>
      {/* {JSON.stringify(users)} */}
      <hr />
      <hr />
      <table>
        {users.data && users.data.length > 0 ? (
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>createdAt</th>
              <th>updatedAt</th>
            </tr>
          </thead>
        ) : (
          ''
        )}
        <tbody>
          {(users.data &&
            users.data.map((user, index) => (
              <tr key={index}>
                <td>{user.first_name}</td>
                <td>{user.last_name}</td>
                <td>{user.email}</td>
                <td>{moment(user.createdAt).format("l")}</td>
                <td>{moment(user.updatedAt).format("l")}</td>
              </tr>
            ))) || (
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "400px",
                height: "200px",
                margin: "auto",
              }}
            >
              <SkeletonTheme baseColor="#202020" highlightColor="#444">
                <span
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Skeleton
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </span>
                <span
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Skeleton
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </span>
                <span
                  style={{
                    width: "100px",
                    height: "100px",
                  }}
                >
                  <Skeleton
                    style={{
                      width: "100%",
                      height: "100%",
                    }}
                  />
                </span>
              </SkeletonTheme>
            </div>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
