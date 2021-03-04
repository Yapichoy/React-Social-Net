import React from 'react';
import Post from "./Post/Post";

let newPostEl = React.createRef();


const MyPosts = (props) => {
  let addPost = () => {
    props.addPost();
  }
  let onChange = () => {
    let text = newPostEl.current.value;
    props.updatePostText(text);
  }

  return <div>
    <h3>My Posts</h3>
    <div>
      <textarea name="" onChange={onChange} id="" cols="30" rows="2" ref={newPostEl } value={props.newPostText}/>
      <button onClick={addPost}>Add Post</button>
    </div>
    <div className="posts">
      { props.posts.map(item => (<Post message={item.message} likesCount={item.likesCount}/>))}
    </div>
  </div>
}

export default MyPosts;