import React from 'react';
import s from './ProfileInfo.module.css'
import img from '../../../assets/hqdefault_live.jpg';
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => (
  <div>
    <div>
      <img className={`${s.image} img-thumbnail rounded`}
        src={`${props?.profile?.photos?.small || img}`}
        alt=""/>
    </div>
    <div className={s.descriptionInfo}>
      {props.profile.fullName}
    </div>
    <ProfileStatus status={props.status} updateStatus={props.updateStatus} typeStatus={props.typeStatus}/>
  </div>
);

export default ProfileInfo;