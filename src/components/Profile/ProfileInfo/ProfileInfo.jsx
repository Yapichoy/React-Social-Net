import React from 'react';
import s from './ProfileInfo.module.css'
import img from '../../../assets/hqdefault_live.jpg';
import ProfileStatus from "./ProfileStatus";
const ProfileInfo = (props) => {
  const onPhotoSelected = (e) => {
    const file = e.target.files[0];
    props.savePhoto(file);
  }
  return (<div>
    <div>
      <img className={`${s.image} img-thumbnail rounded`}
        src={`${props?.profile?.photos?.small || img}`}
        alt=""/>
      {props.isOwner && <input type="file" onChange={onPhotoSelected}/>}
    </div>
    <div className={s.descriptionInfo}>
      {props.profile.fullName}
    </div>
    <ProfileStatus status={props.status} updateStatus={props.updateStatus} typeStatus={props.typeStatus}/>
  </div>
)};

export default ProfileInfo;