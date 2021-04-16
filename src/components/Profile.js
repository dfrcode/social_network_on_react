import React from "react";

const Profile = () => {
  return (
    <div className="content">
      <div className="head-profile">
        <img
          className="img-head"
          src="https://d2halst20r4hcy.cloudfront.net/43f/fe8af/35c2/4e49/9883/70db75550371/original/40544.jpg"
        />
      </div>
      <div className="profile">
        <div className="ava">
          <img
            className="img-avatar"
            src="https://games.mail.ru/hotbox/content_files/gallery/2020/12/11/d49a024e7ade40858a10df3b8976625d.png"
          />
        </div>
        <div className="description">
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
      <div className="form-posts">
        <h3>My posts</h3>
        <input className="text-posts" type="text" placeholder="your news.." />
        <input className="btn-posts" type="button" value="Send" />
      </div>
    </div>
  );
};

export default Profile;
