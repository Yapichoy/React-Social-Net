import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";


let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(() => {
  rerender(store.getState())
});
rerender(store.getState());


reportWebVitals();
