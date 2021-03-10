import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import  {withRouter, BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer.js";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {useEffect} from "react";
import {connect} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./redux/appReducer";
const App = (props) => {
  useEffect(() => {
    props.initializeApp();
  }, [props.initialized]);
  return (

      <div className="app-wrapper">
        <Header/>
        <Navbar/>
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer store={props.store} /> }/>
          <Route path="/profile/:userId?" render={() => <Profile /> }/>
          <Route path="/users" render={() => <UsersContainer store={props.store} /> }/>
          <Route path="/login" render={() => <Login /> }/>
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
