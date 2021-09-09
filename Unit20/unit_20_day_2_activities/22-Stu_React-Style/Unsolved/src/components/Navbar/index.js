import React from "react";
// Here we import the Navbar.css file to grant access to some additional classNames
import "./Navbar.css";

// TODO: Create a styles object called "styles"
const styles = {
  navbar: {
    background: "green",
    justifyContent: "flex-end",
    display: "flex",
  },
};

function Navbar() {
  // TODO: Add a style attribute to `nav`
  return (
    <nav style={styles.navbar} className="navbar">
      <a href="/">Welcome</a>
    </nav>
  );
}

export default Navbar;
