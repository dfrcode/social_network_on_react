import React from "react";
import { NavLink } from "react-router-dom";

import styles from "./Dialog.module.css";

const Dialog = (props) => {
  const { id, name } = props;

  return (
    <NavLink to={`/dialogs/${id}`}>
      <div className={styles.item}>{name}</div>
    </NavLink>
  );
};

export default Dialog;
