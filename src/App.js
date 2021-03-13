import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import  {withRouter, Route} from 'react-router-dom';
import {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer.ts";
import 'antd/dist/antd.css';
const Login = React.lazy(() => import("./components/Login/Login.tsx"));
const Profile =  React.lazy(() => import("./components/Profile/Profile"));
const DialogsContainer = React.lazy(() => import("./components/Dialogs/DialogsContainer.js"));
const UsersContainer = React.lazy(() => import("./components/Users/UsersContainer.tsx"));
const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initialized]);
  return (

      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><DialogsContainer /></React.Suspense> }/>
          <Route path="/profile/:userId?" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Profile /></React.Suspense> }/>
          <Route path="/users" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><UsersContainer /></React.Suspense> }/>
          <Route path="/login" render={() => <React.Suspense fallback={'<div>Loading...</div>'}><Login /></React.Suspense> }/>
        </div>
      </div>
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
