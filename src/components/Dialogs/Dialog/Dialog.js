import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Dialog.module.css";

const Dialog = (props) => {
  const { id, name, url } = props;

  return (
    <NavLink className={styles.link} to={`/dialogs/${id}`}>
      <div className={styles.item}>
        <div className={styles.box_img}>
          <img
            className={styles.img}
            src={url}
          />
        </div>
        <div className={styles.name}>{name}</div>
      </div>
    </NavLink>
  );
};

export default Dialog;
