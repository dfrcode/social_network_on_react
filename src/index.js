import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';

const postsData = [
  {
    id: 1,
    message: "Hi, how are you!?",
    likes: 15,
  },
  {
    id: 2,
    message: "It is my first post",
    likes: 20,
  },
];

const dialogsData = [
  {
    id: 1,
    name: "James",
  },
  {
    id: 2,
    name: "Jane",
  },
  {
    id: 3,
    name: "Kate",
  },
  {
    id: 4,
    name: "Ivan",
  },
  {
    id: 5,
    name: "Sasha",
  },
];

const messagesData = [
  {
    id: 1,
    message: "Hi",
  },
  {
    id: 2,
    message: "How are you?",
  },
];

ReactDOM.render(
  <React.StrictMode>
    <App postsData={postsData} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();