import React from "react";
import Post from "./Post/Post";
// import { postsData } from "./postsData";
import styles from "./Posts.module.css";

const Posts = (props) => {

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
        {props.postsData.map((post) => (
          <Post key={post.id} message={post.message} likes={post.likes} />
        ))}
      </div>
    </div>
  );
};

export default Posts;
