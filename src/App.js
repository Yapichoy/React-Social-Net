import './App.css';
import React from 'react';
import MyHeader from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import  {withRouter, Route} from 'react-router-dom';
import {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer.ts";
import 'antd/dist/antd.css';
import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
const Login = React.lazy(() => import("./components/Login/Login.tsx"));
const Profile =  React.lazy(() => import("./components/Profile/Profile"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.js"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"));



const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initialized]);
  return (
     /* <div className="app-wrapper">
        <MyHeader/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><DialogsContainer /></React.Suspense> }/>
          <Route path="/profile/:userId?" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Profile /></React.Suspense> }/>
          <Route path="/users" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><UsersContainer /></React.Suspense> }/>
          <Route path="/login" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Login /></React.Suspense> }/>
        </div>
      </div>*/
    <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">nav 1</Menu.Item>
          <Menu.Item key="2">nav 2</Menu.Item>
          <Menu.Item key="3">nav 3</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1">
                <Menu.Item key="1">option1</Menu.Item>
                <Menu.Item key="2">option2</Menu.Item>
                <Menu.Item key="3">option3</Menu.Item>
                <Menu.Item key="4">option4</Menu.Item>
              </SubMenu>
              <SubMenu key="sub2" icon={<LaptopOutlined />} title="subnav 2">
                <Menu.Item key="5">option5</Menu.Item>
                <Menu.Item key="6">option6</Menu.Item>
                <Menu.Item key="7">option7</Menu.Item>
                <Menu.Item key="8">option8</Menu.Item>
              </SubMenu>
              <SubMenu key="sub3" icon={<NotificationOutlined />} title="subnav 3">
                <Menu.Item key="9">option9</Menu.Item>
                <Menu.Item key="10">option10</Menu.Item>
                <Menu.Item key="11">option11</Menu.Item>
                <Menu.Item key="12">option12</Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <div className="app-wrapper-content">
              <Route path="/dialogs" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><DialogsContainer /></React.Suspense> }/>
              <Route path="/profile/:userId?" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Profile /></React.Suspense> }/>
              <Route path="/users" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><UsersContainer /></React.Suspense> }/>
              <Route path="/login" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Login /></React.Suspense> }/>
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}></Footer>
    </Layout>
  );
}
const mapDispatchToProps = (state) => {
  return {
    initialized: state.app.initialized
  }
}
export default compose(withRouter, connect(
  mapDispatchToProps,
  {
    initializeApp: initializeApp
  }
))(App);
