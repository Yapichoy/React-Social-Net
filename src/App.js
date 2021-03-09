import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer.js";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
const App = (props) => (
  <BrowserRouter>
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
  </BrowserRouter>
);

export default App;
