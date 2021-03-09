import React from 'react';
import {NavLink} from "react-router-dom";
import s from './User.module.css'
import photo from '../../assets/hqdefault_live.jpg'
import {followApi, unfollowApi} from "../../api";
const User = (props) => {
  const follow = (uid) => {
    followApi(uid).then(data => {
      if (data.resultCode === 0)
        props.follow(uid)
    })
  }
  const unfollow = (uid) => {
    unfollowApi(uid).then(data => {
      if (data.resultCode === 0)
        props.unfollow(uid)
    })
  }
  return (
    <>
      <div className="card">
        <NavLink to={`/profile/${props.id}`}> <img src={props?.photos?.small || photo} className={`card-img-top ${s.cardImage}`} alt="..."/></NavLink>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
          <p className="card-text">{props.status}</p>
        </div>
        <div className="card-body">
          {props.followed ? <a href="#" className="card-link"
                               onClick={e => {
                                 e.preventDefault();
                                 unfollow(props.id)
                               }}

            >Unfollow</a> :
            <a href="#" className="card-link"
               onClick={(e) => {
                 e.preventDefault();
                 follow(props.id)
               }}

            >Follow</a>
          }
          <a href="#" className="card-link">Another link</a>
        </div>
      </div>
    </>
  )
}
export default User;