import React from "react";
import { NavLink } from "react-router-dom";
import { dialogsData } from "./dialogsData";
import { messagesData } from "./messagesData";
import styles from "./Dialogs.module.css";

const DialigItem = (props) => {
  const { id, name } = props;

  return (
    <NavLink to={`/dialogs/${id}`}>
      <div className={styles.item}>{name}</div>
    </NavLink>
  );
};

const Message = (props) => {
  return <div className={styles.message}>{props.message}</div>;
};

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsData.map((dialog) => (
          <DialigItem key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={styles.messages}>
        {messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
