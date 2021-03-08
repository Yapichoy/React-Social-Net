import React from 'react';
import s from './ProfileInfo.module.css'
import img from '../../../assets/hqdefault_live.jpg';

const ProfileInfo = (props) => (
  <div>
    <div>
      <img className={`${s.image} img-thumbnail rounded`}
        src={`${props?.photos?.small || img}`}
        alt=""/>
    </div>
    <div className={s.descriptionInfo}>
      {props.fullName}
    </div>
  </div>
);

export default ProfileInfo;