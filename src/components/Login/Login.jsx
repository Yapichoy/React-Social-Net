import React from 'react';
import AuthForm from "./AuthForm";
import {connect} from "react-redux";
import {loginThuncCreator} from "../../redux/authReducer";

const Login = (props) => {
  const onSubmit = (formData) => {

    props.login(formData);
  }
  return(
    <>
      <h1>Login</h1>
      <AuthForm onSubmit={onSubmit}/>
    </>
  )
}

let mapStateToProps = (state) => {
  return {

  }
}

export default connect(mapStateToProps, {
  login: loginThuncCreator
})(Login);