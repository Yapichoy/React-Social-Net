import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => (
  <div>
    <img src="https://avatars.mds.yandex.net/get-zen_doc/1107063/pub_5b90e349adeb8200aa3ace17_5b910175c586d600aa836613/scale_1200" alt=""/>
    <MyPosts/>
  </div>
);

export default Profile;