import React from "react";
import styles from "./Profile.module.css";
import Posts from "./Posts/Posts";

const Profile = (props) => {

  const { newPost, postsData } = props;

  return (
    <div>
      <div className={styles.header}>
        <img
          className={styles.img_header}
          src="https://d2halst20r4hcy.cloudfront.net/43f/fe8af/35c2/4e49/9883/70db75550371/original/40544.jpg"
        />
      </div>
      <div className={styles.profile}>
        <div className={styles.ava}>
          <img
            className={styles.img_avatar}
            src="https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"
          />
        </div>
        <div className={styles.description}>
          <h3>Denis F</h3>
          <p>
            <span>Date of bird:</span>22.01.1989
          </p>
          <p>
            <span>City:</span>Krasnodar
          </p>
          <p>
            <span>Education:</span>BGU'11
          </p>
          <p>
            <span>Web-site:</span>htps://www.it-noob.ru
          </p>
        </div>
      </div>
      <Posts postsData={postsData} newPost={newPost}/>
    </div>
  );
};

export default Profile;
