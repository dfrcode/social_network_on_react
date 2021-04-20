import React from "react";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import styles from "./Dialogs.module.css";

const Dialogs = (props) => {

  const text = React.createRef();
  const btnSend = React.createRef();

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogs_items}>
        {props.dialogsData.map((dialog) => (
          <Dialog
            key={dialog.id}
            id={dialog.id}
            name={dialog.name}
            url={dialog.url}
          />
        ))}
      </div>
      <div className={styles.messages}>
        <div className={styles.messages__block}>
          {props.messagesData.map((message) => (
            <Message key={message.id} message={message.message} />
          ))}
        </div>
        <div className={styles.messages__input}>
          <input ref={text} className={styles.text__input} type="text" placeholder="your text..." />
          <input ref={btnSend} onClick={() => {alert(text.current.value)}} className={styles.btn__send} type="button" value="send"/>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
