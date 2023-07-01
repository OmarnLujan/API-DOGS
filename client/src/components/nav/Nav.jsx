import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

function Nav(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <NavLink to="/home">
        <button className={styles.button}>Home</button>
      </NavLink>
    </div>
  );
}

export default Nav;
