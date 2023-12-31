import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Events from './Components/Events';
import Phone from './Components/Phone';
import Color from './Components/Color';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      {/* <Events />
    <App />
    <Phone/> */}
    <Color/>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
