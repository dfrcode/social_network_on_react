import React from "react";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.img}
        src="http://logok.org/wp-content/uploads/2014/12/Z-logo.png"
      />
    </header>
  );
};

export default Header;
