import React from 'react';
import s from './Profile.module.css';

const Profile = () => (
  <div className={s.content}>
    <img src="https://avatars.mds.yandex.net/get-zen_doc/1107063/pub_5b90e349adeb8200aa3ace17_5b910175c586d600aa836613/scale_1200" alt=""/>
    <div>
      My Posts
      <div>
        new post
      </div>
      <div className="posts">
        <div className="item">post1</div>
        <div className="item">post2</div>
        <div className="item">post3</div>
        <div className="item">post4</div>
      </div>
    </div>
  </div>
);

export default Profile;