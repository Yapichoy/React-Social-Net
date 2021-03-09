import {Redirect} from "react-router-dom";
import React from "react";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth
  }
}
export const WithAuthRedirect = (Component) => {
  const RedirectComponent = (props) => {
    if(!props.isAuth) return <Redirect to='/login' />
    return(
      <Component {...props}/>
    )
  }

  return connect(mapStateToProps)(RedirectComponent);
}