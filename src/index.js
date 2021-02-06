import React from 'react';
import ReactDOM from 'react-dom';
import './assets/style/index.css';
import App from './App';
<<<<<<< HEAD
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
=======
import * as serviceWorkerRegistration from './pwa/serviceWorkerRegistration';
import reportWebVitals from './pwa/reportWebVitals';
>>>>>>> d0f1de9... Restructured files

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
// serviceWorkerRegistration.unregister();
serviceWorkerRegistration.register();
console.log("Registered");

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
