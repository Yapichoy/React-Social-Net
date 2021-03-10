import React, {useEffect} from 'react';
import s from './Profile.module.css';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {connect} from "react-redux";
import {
  getStatusThunkCreator,
  getUserDataThunkCreator,
  updateStatusActionCreator,
  updateStatusThunkCreator
} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";

const Profile = (props) => {
  useEffect(()=>{
    let userId = props?.match?.params?.userId || props.userId;
    props.setUserProfile(userId);
    props.getStatus(userId);
  }, 20);
  return (
    <div>
      <ProfileInfo {...props} />
      <MyPostsContainer store={props.store}/>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    userId: state.auth.data.id
  }
}

export default compose(
  connect(mapStateToProps, {
    setUserProfile: getUserDataThunkCreator,
    updateStatus: updateStatusThunkCreator,
    getStatus: getStatusThunkCreator,
    typeStatus: updateStatusActionCreator
  }),
  withRouter,
  WithAuthRedirect
)(Profile);