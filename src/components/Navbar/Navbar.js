import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={styles.item}>Profile</li>
        <li className={styles.item}>Messages</li>
        <li className={styles.item}>News</li>
        <li className={styles.item}>Music</li>
        <li className={styles.item}>Settings</li>
      </ul>
    </nav>
  );
};

export default Navbar;
