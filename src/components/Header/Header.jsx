import React from 'react';
import s from './Header.module.css';
import {connect} from "react-redux";
import {NavLink} from "react-router-dom";
import {checkAuthThunc, logoutThuncCreator} from "../../redux/authReducer.ts";
import {Button, Col, Layout, Row, Space} from 'antd';

const {Header} = Layout;
const MyHeader = (props) => {

  const logout = (e) => {
    e.preventDefault();
    props.logout();
  }
  return (
    <Header className={`header ${s.header}`}>
      <Row>
        <Col span={20}>
          <div className="logo">
            <NavLink className="navbar-brand" to="/">
              <img src="https://mediaprocessor.websimages.com/fit/1920x1920/gutternation.webs.com/Gutter%20Logo2.png"
                   alt=""/>
            </NavLink>
          </div>
        </Col>
        <Col span={4} alig>
          <Space align={"end"} direction={"vertical"} >
          {
            props.isAuth ?
              <Button type={'primary'} onClick={logout}>Logout</Button> :
              <NavLink to={'/login'}>Login</NavLink>
          }
          </Space>
        </Col>

      </Row>
    </Header>
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
    checkAuth: checkAuthThunc,
    logout: logoutThuncCreator
  }
)(MyHeader);
