import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  let newPostElem = React.createRef();

  const onAddPost = () => {
    const { newPost } = props;

    let text = newPostElem.current.value;
    newPost(text);
  };

  return (
    <div>
      <div className={styles.form_posts}>
        <h3>My posts</h3>
        <input
          ref={newPostElem}
          className={styles.text_posts}
          type="text"
          placeholder="your news.."
        />
        <input
          className={styles.btn_posts}
          onClick={onAddPost}
          type="button"
          value="Send"
        />
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
