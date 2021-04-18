import React from "react";
import Dialog from './Dialog/Dialog';
import Message from './Message/Message';
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {props.dialogsData.map((dialog) => (
          <Dialog key={dialog.id} id={dialog.id} name={dialog.name} />
        ))}
      </div>
      <div className={styles.messages}>
        {props.messagesData.map((message) => (
          <Message key={message.id} message={message.message} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
