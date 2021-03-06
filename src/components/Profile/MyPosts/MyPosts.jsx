import React from 'react';
import Post from "./Post/Post";
import s from '../Profile.module.css';
let newPostEl = React.createRef();

const MyPosts = (props) => {
  let onChange = () => {
    props.onChange(newPostEl.current.value);
  }
  return <div>
    <h4>My Posts</h4>
    <div className={s.sendFormContainer}>
      <textarea className={`${s.textArea} form-control`} onChange={onChange} id="" cols="30" rows="2" ref={newPostEl } value={props.newPostText}/>
      <button className='btn btn-primary' onClick={props.addPost}>Add Post</button>
    </div>
    <div className="posts">
      { props.posts.map(item => (<Post message={item.message} likesCount={item.likesCount}/>))}
    </div>
  </div>
}

export default MyPosts;