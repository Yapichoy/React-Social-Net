import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import state, {addPost, updatePostText, subscribe} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} updatePostText={updatePostText}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
subscribe(rerender);
rerender(state);


reportWebVitals();
