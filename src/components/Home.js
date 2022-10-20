import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";

const Home = () => {
  const date = new Date();
  const hour = date.getHours();
  useEffect(() => {
    document.title = "Home";
  }, []);

  return (
    <div>
      <MDBCard style={{ maxWidth: "650px", position: "center" }}>
        <MDBCardImage
          src="https://mdbootstrap.com/img/new/standard/nature/184.webp"
          position="top"
          alt="..."
        />
        <MDBCardBody>
          <MDBCardTitle>
            {hour < 12
              ? "Good Morning"
              : hour < 18
              ? "Good Afternoon"
              : "Good evening"}{" "}
          </MDBCardTitle>
          <MDBCardText>More Features will be added Soon...!!</MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Home;
