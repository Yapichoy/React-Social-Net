import React from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => (
  <div>
    <ProfileInfo/>
    <MyPosts posts={props.state.posts} updatePostText={props.updatePostText} addPost={props.addPost} newPostText={props.state.newPostText}/>
  </div>
);

export default Profile;