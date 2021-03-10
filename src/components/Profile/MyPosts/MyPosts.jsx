import React from 'react';
import Post from "./Post/Post";
import s from '../Profile.module.css';
import {Field, reduxForm} from "redux-form";
let newPostEl = React.createRef();

const MyPosts = (props) => {
  let onSubmit = (values) => {
    debugger
    props.addPost(values.postMessage);
  }
  return <div>
    <h4>My Posts</h4>
    <div className={s.sendFormContainer}>
      <MyPostForm {...props} onSubmit={onSubmit}/>
    </div>
    <div className="posts">
      { props.posts.map(item => (<Post message={item.message} likesCount={item.likesCount}/>))}
    </div>
  </div>
}

let MyPostForm = (props) => {

  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' className={`${s.textArea} form-control`}  name={'postMessage'}/>
      <button className='btn btn-primary'>Add Post</button>
    </form>
  )
}

MyPostForm = reduxForm({form: 'myPostForm'})(MyPostForm);
export default MyPosts;