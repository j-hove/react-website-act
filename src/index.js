import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HeaderApp from './HeaderApp/HeaderApp';
import HeroApp from './BodyApp/HeroApp';
import WhatIDoApp from './BodyApp/WhatIDoApp';
import HobbiesApp from './BodyApp/HobbiesApp';
import FooterApp from './FooterApp/FooterApp';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HeaderApp />
    <HeroApp />
    <WhatIDoApp />
    <HobbiesApp />
    <App />
    <FooterApp />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
