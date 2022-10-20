import React, { useState } from "react";
import PropTypes from "prop-types";
import base_url from "./../../api/bootapi";
import { Form, Input } from "reactstrap";
import { MDBCol, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import { toast } from "react-toastify";

async function loginUser(credentials) {
  return fetch(`${base_url}/token`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(credentials),
  }).then(
    (data) => data.json(),
    (error) => console.log(error)
  );
}

export default function Login({ setToken }) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password,
    });
    if (token.error === "Internal Server Error") {
      toast.error("Bad Credentials..!!", {
        position: "bottom-center",
      });
    } else {
      setToken(token);
      sessionStorage.setItem("emailId", username);
    }
  };

  return (
    <div>
      <MDBRow className="mb-4">
        <MDBCol sm="8">
          <br></br>
          <br></br>
          <h3>Please Log In..!!</h3>
          <br></br>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              placeholder="Enter Email ID"
              onChange={(e) => setUserName(e.target.value)}
            />
            <br></br>
            <Input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br></br>

            <MDBRow className="mb-4">
              <MDBCol>
                <a href="/register">Don't Have Account..? SignUp..!!</a>
              </MDBCol>
            </MDBRow>

            <MDBBtn type="submit" outline color="success">
              Sign in
            </MDBBtn>
          </Form>
        </MDBCol>
      </MDBRow>
    </div>
  );
}

Login.propTypes = {
  setToken: PropTypes.func.isRequired,
};
