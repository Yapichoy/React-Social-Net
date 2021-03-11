import React from 'react';
import {addPostActionCreator} from "../../../redux/profileReducer.ts";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
  return {
    posts: state.profilePage.posts,
  }
}
const MyPostsContainer = connect(mapStateToProps, {
  addPost: addPostActionCreator
})(MyPosts);
export default MyPostsContainer;