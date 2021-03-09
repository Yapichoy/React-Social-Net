import React from 'react';
import {NavLink} from "react-router-dom";
import s from './User.module.css'
import photo from '../../assets/hqdefault_live.jpg'
const User = (props) => {
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
                                 props.unfollow(props.id)
                               }}

            >Unfollow</a> :
            <a href="#" className="card-link"
               onClick={(e) => {
                 e.preventDefault();
                 props.follow(props.id)
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