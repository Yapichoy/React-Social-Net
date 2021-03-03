import React from 'react';
import s from './Post.module.css';

const Post = (props) => (
  <div className={s.item}>
    <img src="https://pbs.twimg.com/media/EWTu_J_XQAMRWeB.jpg" alt=""/>
    {props.message}
  </div>
)

export default Post;