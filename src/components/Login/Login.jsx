import React from 'react';
import AuthForm from "./AuthForm";

const Login = (props) => {
  const onSubmit = (formData) => {
    debugger
  }
  return(
    <>
      <h1>Login</h1>
      <AuthForm onSubmit={onSubmit}/>
    </>
  )
}

export default Login;