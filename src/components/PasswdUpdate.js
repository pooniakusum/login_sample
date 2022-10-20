import React, { Fragment, useEffect, useState } from "react";
import { Container, Form, FormGroup, Input, Button } from "reactstrap";
import axios from "axios";
import { toast } from "react-toastify";
import base_url from "../api/bootapi";

const PasswdUpdate = ({ token }) => {
  useEffect(() => {
    document.title = "Change Password";
  }, []);
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    console.log(users);
    postDataToServer(users);
    document.getElementById("changeForm").reset();
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios
      .patch(
        `${base_url}/users/pwd/${sessionStorage.getItem("emailId")}`,
        data,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .then(
        (response) => {
          console.log(response);
          console.log("success");
          toast.success("Password Changed Successfully...!!", {
            position: "bottom-center",
          });
        },
        (error) => {
          console.log("error");
          console.log(error);
          toast.error("Something went wrong..!!", {
            position: "bottom-center",
          });
        }
      );
  };

  return (
    <div>
      <Fragment>
        <h1 className="text-center my-3">Change Password</h1>
        <Form id="changeForm" onSubmit={handleForm}>
          <FormGroup>
            <label>
              <h5>Old Password</h5>
            </label>
            <Input
              type="password"
              placeholder="Enter Here"
              name="oldPassword"
              id="oldPassword"
              onChange={(e) => {
                setUsers({ ...users, oldPassword: e.target.value });
              }}
            />
          </FormGroup>
          <FormGroup>
            <label>
              <h5>New Password</h5>
            </label>
            <Input
              type="password"
              placeholder="Enter Here"
              name="newPassword"
              id="newPassword"
              onChange={(e) => {
                setUsers({ ...users, newPassword: e.target.value });
              }}
            />
          </FormGroup>
          <Container className="text-center">
            <Button type="submit" color="success">
              Continue
            </Button>{" "}
            <Button type="reset" color="warning">
              Clear
            </Button>
          </Container>
        </Form>
      </Fragment>
    </div>
  );
};

export default PasswdUpdate;
