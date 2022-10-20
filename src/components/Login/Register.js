import React, { useState } from "react";
import { Input, Form } from "reactstrap";
import { MDBRow, MDBCol, MDBBtn } from "mdb-react-ui-kit";
import axios from "axios";
import base_url from "../../api/bootapi";
import { toast } from "react-toastify";

const Register = () => {
  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    console.log(users);
    postDataToServer(users);
    document.getElementById("registerForm").reset();
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios.post(`${base_url}/users`, data).then(
      (response) => {
        console.log(response);
        console.log("success");
        toast.success("Registered Successfully, Move to Login Page...!!", {
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
      <MDBRow className="mb-4">
        <MDBCol sm="8">
          <br></br>
          <br></br>
          <h3>Please Sign Up..!!</h3>
          <br></br>
          <Form id="registerForm" onSubmit={handleForm}>
            <Input
              type="text"
              placeholder="Enter Name"
              onChange={(e) => setUsers({ ...users, userName: e.target.value })}
            />
            <br></br>
            <Input
              type="email"
              placeholder="Enter Email ID"
              onChange={(e) => setUsers({ ...users, emailId: e.target.value })}
            />
            <br></br>
            <Input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setUsers({ ...users, password: e.target.value })}
            />
            <br></br>

            <MDBRow className="mb-2">
              <MDBCol sm="9"> </MDBCol>
              <MDBCol sm="3">
                <a href="/">Log In</a>
              </MDBCol>
            </MDBRow>
            <MDBBtn type="submit" outline color="success">
              Sign Up
            </MDBBtn>
          </Form>
        </MDBCol>
      </MDBRow>
    </div>
  );
};
export default Register;
