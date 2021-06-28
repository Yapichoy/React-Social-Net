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
import ChatPage from "./pages/ChatPage.tsx";
const Login = React.lazy(() => import("./components/Login/Login.tsx"));
const Profile =  React.lazy(() => import("./components/Profile/Profile"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.js"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"));

const {  Content, Footer} = Layout;

const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initialized]);
  return (
    <Layout>
      <MyHeader/>
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>List</Breadcrumb.Item>
          <Breadcrumb.Item>App</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Navbar/>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <div className="app-wrapper-content">
              <Route path="/dialogs" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><DialogsContainer /></React.Suspense> }/>
              <Route path="/profile/:userId?" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Profile /></React.Suspense> }/>
              <Route path="/users" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><UsersContainer /></React.Suspense> }/>
              <Route path="/login" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Login /></React.Suspense> }/>
              <Route path="/chat" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><ChatPage /></React.Suspense> }/>
            </div>
          </Content>
        </Layout>
      </Content>
      <Footer></Footer>
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
