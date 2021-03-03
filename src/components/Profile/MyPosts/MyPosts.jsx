import React from 'react';
import Post from "./Post/Post";

let posts = [
  {id: 1, message: "Test", likesCount: 1},
  {id: 2, message: "Test test", likesCount: 2}
]
const MyPosts = () => (
  <div>
    <h3>My Posts</h3>
    <div>
      <textarea name="" id="" cols="30" rows="2"></textarea>
      <button>Add Post</button>
    </div>
    <div className="posts">
      { posts.map(item => (<Post message={item.message} likesCount={item.likesCount}/>))}
    </div>
  </div>
);

export default MyPosts;