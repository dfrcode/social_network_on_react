import React from "react";
import Post from "./Post/Post";
import styles from "./Posts.module.css";

const Posts = (props) => {
  let newPostElem = React.createRef();

  const onAddPost = () => {
    let text = newPostElem.current.value;
    props.newPost(text);
  };

  const onChangeValueText = () => {
      let text = newPostElem.current.value;
      props.changeValue(text);
  };

  return (
    <div>
      <div className={styles.form_posts}>
        <h3>My posts</h3>
        <textarea
          ref={newPostElem}
          className={styles.text_posts}
          onChange={onChangeValueText}
          value={props.textValue}
        />
        <input
          className={styles.btn_posts}
          onClick={onAddPost}
          type="button"
          value="send"
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
