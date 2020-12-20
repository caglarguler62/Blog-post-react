import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const blogPost = {
  title: 'My first post',
  published: true
}
let isPublished;
if(blogPost.published){
  isPublished = 'green'
} else {
  isPublished = 'red'
}

const element = <h1 className={isPublished}>{blogPost.title}</h1>
ReactDOM.render(   
  element,       
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
