import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { toast } from "react-toastify";
import {
  Container,
  Form,
  FormGroup,
  Input,
  Button,
  ButtonGroup,
} from "reactstrap";
import base_url from "../api/bootapi";

const AddUsers = ({ token }) => {
  useEffect(() => {
    document.title = "Add Users";
  }, []);

  const [users, setUsers] = useState([]);

  const handleForm = (e) => {
    console.log(users);
    postDataToServer(users);
    document.getElementById("userDetailForm").reset();
    e.preventDefault();
  };

  const postDataToServer = (data) => {
    axios
      .post(`${base_url}/users/${sessionStorage.getItem("emailId")}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(
        (response) => {
          console.log(response);
          console.log("success");
          toast.success("Details Saved Successfully...!!", {
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
    <Fragment>
      <h1 className="text-center my-3">Fill Details</h1>
      <Form id="userDetailForm" onSubmit={handleForm}>
        <h5>Gender</h5>
        <ButtonGroup>
          <Button
            color="secondary"
            value={"MALE"}
            onClick={(e) => setUsers({ ...users, gender: e.target.value })}
            active={users.gender === "MALE"}
          >
            MALE
          </Button>
          <Button
            color="secondary"
            value={"FEMALE"}
            onClick={(e) => setUsers({ ...users, gender: e.target.value })}
            active={users.gender === "FEMALE"}
          >
            FEMALE
          </Button>
        </ButtonGroup>

        <FormGroup>
          <label>
            <h5>Age</h5>
          </label>
          <Input
            type="number"
            placeholder="Enter Here"
            name="age"
            id="age"
            onChange={(e) => {
              setUsers({ ...users, age: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label>
            <h5>Location</h5>
          </label>
          <Input
            type="text"
            placeholder="Enter Here"
            name="location"
            id="location"
            onChange={(e) => {
              setUsers({ ...users, location: e.target.value });
            }}
          />
        </FormGroup>
        <FormGroup>
          <label>
            <h5>Occupation</h5>
          </label>
          <Input
            type="text"
            placeholder="Enter Here"
            name="occupation"
            id="occupation"
            onChange={(e) => {
              setUsers({ ...users, occupation: e.target.value });
            }}
          />
        </FormGroup>
        <Container className="text-center">
          <Button type="submit" color="success">
            Add Detail
          </Button>{" "}
          <Button type="reset" color="warning">
            Clear
          </Button>
        </Container>
      </Form>
    </Fragment>
  );
};

export default AddUsers;
