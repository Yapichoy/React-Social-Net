import React, {useEffect} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {get} from "axios";
import {connect} from "react-redux";
import {setUserProfileActionCreator} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

const Profile = (props) => {
  useEffect(()=>{
    let userId = props?.match?.params?.userId || 0;
    if (userId !== 0)
      get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`).then( response => { props.setUserProfile(response.data) });
  }, 0);
  return (
    <div>
      <ProfileInfo {...props.profile}/>
      <MyPostsContainer store={props.store}/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile
  }
}
export default connect(
  mapStateToProps,
  {setUserProfile: setUserProfileActionCreator}
  )(withRouter(Profile));