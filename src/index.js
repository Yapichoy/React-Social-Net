import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";


let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={store.addPost.bind(store)} updatePostText={store.updatePostText.bind(store)}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(rerender);
rerender(store.getState());


reportWebVitals();
