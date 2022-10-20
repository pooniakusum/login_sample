import React, { useEffect, useState } from "react";
import Details from "./Details";

import base_url from "./../api/bootapi";
import axios from "axios";
import { toast } from "react-toastify";

const AllUsers = ({ token }) => {
  // function to call server
  const getAllUsersFromServer = () => {
    axios
      .get(`${base_url}/users/${sessionStorage.getItem("emailId")}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          //success
          console.log(response.data);
          toast.success("Data Fetched", {
            position: "bottom-center",
          });
          setUsers(response.data);
        },
        (error) => {
          console.log(error);
          toast.error("Something went wrong..!!", {
            position: "bottom-center",
          });
        }
      );
  };
  useEffect(() => {
    document.title = "All Details";
    getAllUsersFromServer();
  }, []);

  const [users, setUsers] = useState([]);

  return (
    <div>
      <h1>All Details</h1>
      <Details user={users} token={token} />
    </div>
  );
};

export default AllUsers;
