import React from "react";
import { ListGroup, ListGroupItem } from "reactstrap";

const Menu = () => {
  return (
    <ListGroup>
      <ListGroupItem tag="a" href="/">
        Home
      </ListGroupItem>
      <ListGroupItem tag="a" href="/add-user">
        Add Details
      </ListGroupItem>
      <ListGroupItem tag="a" href="/view-users">
        View Details
      </ListGroupItem>
      <ListGroupItem tag="a" href="/settings">
        Settings
      </ListGroupItem>
      <ListGroupItem tag="a" href="/contact">
        Contact Us
      </ListGroupItem>

    </ListGroup>
  );
};

export default Menu;
