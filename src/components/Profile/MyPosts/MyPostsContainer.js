import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profileReducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
  let onChange = (text) => {
    props.store.dispatch(updatePostTextActionCreator(text));
  }
  let addPost = () =>{
    props.store.dispatch(addPostActionCreator())
  };
  return (<MyPosts posts={props.store.getState().profilePage.posts} newPostText={props.store.getState().profilePage.newPostText} addPost={addPost} onChange={onChange}/>)
}

export default MyPostsContainer;