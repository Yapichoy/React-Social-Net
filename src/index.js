import React from 'react';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/redux-store";
import ReactDOM from "react-dom";
import App from "./App";
import {Provider} from "react-redux";

let rerender = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>
      </Provider>
    </React.StrictMode>,
    document.getElementById('root')
  );
}
store.subscribe(() => {
  rerender(store.getState())
});
rerender(store.getState());


reportWebVitals();
