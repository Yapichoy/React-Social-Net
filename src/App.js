import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';
const App = (props) => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <Dialogs state={props.state.messagesPage} /> }/>
        <Route path="/profile" render={() => <Profile updatePostText={props.updatePostText} addPost={props.addPost} state={props.state.profilePage}/> }/>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
