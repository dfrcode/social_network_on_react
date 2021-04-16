import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {

  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"
      />
      <p>{ props.message }</p>
    </div>
  );
};

export default Post;
