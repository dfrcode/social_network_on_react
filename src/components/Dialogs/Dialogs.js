import React from "react";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import { dialogsData } from "./dialogsData";
import { messagesData } from "./messagesData";
import styles from "./Dialogs.module.css";

const Dialogs = () => {
  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {dialogsData.map((dialog) => (
          <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />
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
