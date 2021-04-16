import React from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        <li className={`${styles.item} ${styles.active}`}>
          <a href="/profile">Profile</a>
        </li>
        <li className={styles.item}>
          <a href="/dialogs">Messages</a>
        </li>
        <li className={styles.item}>
          <a href="/news">News</a>
        </li>
        <li className={styles.item}>
          <a href="/music">Music</a>
        </li>
        <li className={styles.item}>
          <a href="/settings">Settings</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
