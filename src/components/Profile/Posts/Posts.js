import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = () => {
  return (
    <div>
      <div className={styles.form_posts}>
        <h3>My posts</h3>
        <input
          className={styles.text_posts}
          type="text"
          placeholder="your news.."
        />
        <input className={styles.btn_posts} type="button" value="Send" />
      </div>
      <div className={styles.posts}>
        <Post message="Hi, how are you!?"/>
        <Post message="It is my first post"/>
      </div>
    </div>
  );
};

export default Posts;
