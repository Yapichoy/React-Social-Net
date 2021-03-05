import logo from './logo.svg';
import './App.css';
import 'foundation-sites/dist/css/foundation.min.css'
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {BrowserRouter, Route} from 'react-router-dom';
import DialogsContainer from "./components/Dialogs/DialogsContainer.js";
const App = (props) => (
  <BrowserRouter>
    <div className="app-wrapper">
      <Header/>
      <Navbar/>
      <div className="app-wrapper-content">
        <Route path="/dialogs" render={() => <DialogsContainer store={props.store} /> }/>
        <Route path="/profile" render={() => <Profile store={props.store} /> }/>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
