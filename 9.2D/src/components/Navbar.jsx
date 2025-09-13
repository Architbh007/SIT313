import React from "react";
import { Menu, Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <Menu
      fixed="top"
      style={{ borderRadius: 0, backgroundColor: "#add8e6" }}
    >
      <Container>
        <Menu.Item header as={Link} to="/" style={{ color: "black" }}>
          DEV@Deakin
        </Menu.Item>
        <Menu.Item as={Link} to="/" style={{ color: "black" }}>
          Home
        </Menu.Item>
        <Menu.Item as={Link} to="/plans" style={{ color: "black" }}>
          Plans
        </Menu.Item>
        <Menu.Item as={Link} to="/post" style={{ color: "black" }}>
          Post Question
        </Menu.Item>
      </Container>
    </Menu>
  );
}
