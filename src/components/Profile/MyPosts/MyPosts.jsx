import React from 'react';
import Post from "./Post/Post";

const MyPosts = () => (
  <div>
    My Posts
    <div>
      <textarea name="" id="" cols="30" rows="2"></textarea>
      <button>Add Post</button>
    </div>
    <div className="posts">
      <Post message="Test props"/>
    </div>
  </div>
);

export default MyPosts;