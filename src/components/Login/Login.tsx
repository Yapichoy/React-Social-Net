import React from 'react';
import AuthForm from "./AuthForm.tsx";
import {connect} from "react-redux";
import {loginThuncCreator} from "../../redux/authReducer.ts";
import {Redirect} from "react-router-dom";
import {AuthType} from "../../types";

type MapStatePropsType = {
  isAuth: boolean
}
type MapDispatchropsType = {
  login: (formData: AuthType) => void
}
const Login:React.FC<MapStatePropsType & MapDispatchropsType> = (props) => {
  const onSubmit = (formData) => {
    props.login(formData);
  }
  if(props.isAuth) return <Redirect to={'/profile'}/>
  return(
    <>
      <h1>Login</h1>
      <AuthForm onSubmit={onSubmit}/>
    </>
  )
}

let mapStateToProps = (state): MapStatePropsType => {
  return {
    isAuth: state.auth.isAuth
  }
}

export default connect(mapStateToProps, {
  login: loginThuncCreator
})(Login);