import React from "react";
import styles from "./Post.module.css";

const Post = () => {
  return (
    <div className={styles.item}>
      <img
        className={styles.avatar}
        src="https://pixelbox.ru/wp-content/uploads/2020/12/ava-vk-cats-92.jpg"
      />
      <p>post1</p>
    </div>
  );
};

export default Post;
