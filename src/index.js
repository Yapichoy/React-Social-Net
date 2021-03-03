import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
  {id: 1, name: 'Oleg'},
  {id: 2, name: 'Max'},
  {id: 3, name: 'Dimon'}
];

let messages = [
  {id: 1, name: 'Hello'},
  {id: 2, name: 'How are you?'},
  {id: 3, name: 'Maan'}
];
let posts = [
  {id: 1, message: "Test", likesCount: 1},
  {id: 2, message: "Test test", likesCount: 2}
]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
