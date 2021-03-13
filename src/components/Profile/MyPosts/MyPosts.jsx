import React from 'react';
import Post from "./Post/Post";
import s from '../Profile.module.css';
import {Field, reduxForm} from "redux-form";
import {maxLength, required} from '../../../utils/validators';
import {Button} from "antd";

const maxLength30 = maxLength(30);
const MyPosts = React.memo((props) => {
  let onSubmit = (values) => {
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
});

let MyPostForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field component='textarea' validate={[required, maxLength30]} className={`${s.textArea} form-control`}  name={'postMessage'}/>
      <Button type={'primary'}>Add Post</Button>
    </form>
  )
}

MyPostForm = reduxForm({form: 'myPostForm'})(MyPostForm);
export default MyPosts;