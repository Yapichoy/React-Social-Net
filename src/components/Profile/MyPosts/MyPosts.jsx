import React from 'react';
import Post from "./Post/Post";

const MyPosts = (props) => (
  <div>
    <h3>My Posts</h3>
    <div>
      <textarea name="" id="" cols="30" rows="2"></textarea>
      <button>Add Post</button>
    </div>
    <div className="posts">
      { props.posts.map(item => (<Post message={item.message} likesCount={item.likesCount}/>))}
    </div>
  </div>
);

export default MyPosts;