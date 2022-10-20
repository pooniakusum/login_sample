import React from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  CardText,
  Button,
  Container,
} from "reactstrap";
import axios from "axios";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";

const Details = ({ user, token }) => {
  const userDetail = user.userDetails;

  if (userDetail === null) {
    return (
      <div>
        <Card>
          <CardTitle>No Data Present...!!! </CardTitle>{" "}
          <CardText>Please Add Data</CardText>
        </Card>
      </div>
    );
  }
  if (userDetail !== undefined) {
    return (
      <Card className="text-left">
        <CardBody>
          <CardTitle className="font-weight-bold">
            Name: {user.userName}
          </CardTitle>
          <CardSubtitle className="font-weight-bold">
            Email Id: {user.emailId}
          </CardSubtitle>
          <CardText>
            <span style={{ color: "Blue" }}>Gender</span>: {userDetail.gender}
          </CardText>
          <CardText>
            <span style={{ color: "Blue" }}>Age</span>: {userDetail.age}
          </CardText>
          <CardText>
            <span style={{ color: "Blue" }}>Location</span>:{" "}
            {userDetail.location}
          </CardText>
          <CardText>
            <span style={{ color: "Blue" }}>Occupation</span>:{" "}
            {userDetail.occupation}
          </CardText>
          <Container className="text-center">
            <Button
              color="danger"
              onClick={() =>
                axios
                  .delete(
                    `${base_url}/users/userdetail/${sessionStorage.getItem(
                      "emailId"
                    )}`,
                    {
                      headers: { Authorization: `Bearer ${token}` },
                    }
                  )
                  .then(
                    (response) => {
                      //success
                      console.log(response);
                      console.log("Deleted");
                      window.location.reload();
                    },
                    (error) => {
                      console.log(error);
                      toast.error("Something went wrong..!!");
                    }
                  )
              }
            >
              Delete
            </Button>
          </Container>
        </CardBody>
      </Card>
    );
  } else {
    return <h1> </h1>;
  }
};

export default Details;
