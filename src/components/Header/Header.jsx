import React, {useEffect} from 'react';
import s from './Header.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {setAuthActionCreator, setUserDataActionCreator} from "../../redux/authReducer";
import {get} from "axios";

const Header = (props) => {
  useEffect(() => {
    get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then( response => {
      debugger
      if (response?.data?.data) {
        props.setAuth();
        props.setUserData(response.data.data);
      }


    });
  }, 0);
  return (
    <header className={s.header}>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="collapse navbar-collapse d-flex justify-content-between">
          <NavLink className="navbar-brand" to="/">
            <img src="https://mediaprocessor.websimages.com/fit/1920x1920/gutternation.webs.com/Gutter%20Logo2.png" alt=""/>
          </NavLink>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              {
                props.isAuth?
                <NavLink to={'/auth/logout'} className="nav-link" aria-current="page">Logout</NavLink> :
                <NavLink to={'/auth/login'} className="nav-link" aria-current="page">Login</NavLink>
              }
            </li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

const mapStateToProps = state => {
  return {
    userData: state.auth.data,
    isAuth: state.auth.isAuth
  }
};
export default connect(
  mapStateToProps,
  {
    setUserData: setUserDataActionCreator,
    setAuth: setAuthActionCreator
  }
  )(Header);
