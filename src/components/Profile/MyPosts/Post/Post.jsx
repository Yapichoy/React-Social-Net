import React from 'react';
import s from './Post.module.css';

const Post = (props) => (
  <div className={s.item}>
    <img src="https://pbs.twimg.com/media/EWTu_J_XQAMRWeB.jpg" alt=""/>
    <div className={s.itemInfoWrapper}>
      <div>{props.message}</div>
      <div className={s.itemInfoWrapperBottom}>
        <div>01.01.1981</div>
        <div>Likes 0</div>
      </div>
    </div>
  </div>
)

export default Post;