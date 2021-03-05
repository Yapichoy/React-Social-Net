import React from 'react';
import Post from "./Post/Post";

let newPostEl = React.createRef();


const MyPosts = (props) => {
  let onChange = () => {
    props.onChange(newPostEl.current.value);
  }
  return <div>
    <h3>My Posts</h3>
    <div>
      <textarea name="" onChange={onChange} id="" cols="30" rows="2" ref={newPostEl } value={props.newPostText}/>
      <button className='button success' onClick={props.addPost}>Add Post</button>
    </div>
    <div className="posts">
      { props.posts.map(item => (<Post message={item.message} likesCount={item.likesCount}/>))}
    </div>
  </div>
}

export default MyPosts;