import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";
import base_url from "../api/bootapi";
import { toast } from "react-toastify";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Settings = ({ token }) => {
  let navigate = useNavigate();
  return (
    <div>
      <MDBRow>
        <MDBCol sm="6">
          <MDBCard style={{ maxWidth: "20rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Change Password</MDBCardTitle>
              <MDBCardText>
                Changes the Password for the user account.
              </MDBCardText>
              <MDBBtn
                outline
                onClick={() => {
                  navigate("/changePassword");
                }}
              >
                Continue
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>{" "}
        <MDBCol sm="6">
          <MDBCard style={{ maxWidth: "20rem" }}>
            <MDBCardBody>
              <MDBCardTitle>Delete Account</MDBCardTitle>
              <MDBCardText>
                Deletes the user account... Proceed with Caution.
              </MDBCardText>
              <MDBBtn
                outline
                color="danger"
                onClick={() =>
                  axios
                    .delete(
                      `${base_url}/users/${sessionStorage.getItem("emailId")}`,
                      {
                        headers: { Authorization: `Bearer ${token}` },
                      }
                    )
                    .then(
                      (response) => {
                        //success
                        console.log(response);
                        console.log("Deleted");
                        sessionStorage.clear();
                        navigate("/");
                        window.location.reload();
                      },
                      (error) => {
                        console.log(error);
                        toast.error("Something went wrong..!!");
                      }
                    )
                }
              >
                Continue
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
        <MDBCol sm="6">
          <MDBCard style={{ maxWidth: "20rem" }}>
            <MDBCardBody>
              <MDBCardTitle>LogOut</MDBCardTitle>
              <MDBCardText>Log out from the user account.</MDBCardText>
              <MDBBtn
                outline
                color="dark"
                onClick={() => {
                  sessionStorage.clear();
                  navigate("/");
                  window.location.reload();
                }}
              >
                Continue
              </MDBBtn>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </div>
  );
};

export default Settings;
