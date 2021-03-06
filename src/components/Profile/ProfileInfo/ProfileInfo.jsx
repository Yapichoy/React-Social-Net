import React from 'react';
import s from './ProfileInfo.module.css'
const ProfileInfo = () => (
  <div>
    <div>
      <img className={`${s.image} img-thumbnail rounded`}
        src="https://avatars.mds.yandex.net/get-zen_doc/1107063/pub_5b90e349adeb8200aa3ace17_5b910175c586d600aa836613/scale_1200"
        alt=""/>
    </div>
    <div className={s.descriptionInfo}>
      ava + description
    </div>
  </div>
);

export default ProfileInfo;