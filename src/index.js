import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter}from "react-router-dom";
import Collection from './pages/Collection';
import Trade from './pages/Trade';
import BuySell from './pages/BuySell';
import AboutMe from './pages/AboutMe';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />    
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

{/* <Routes>
        <Route exact path="/" element={<App />}>
          <Route path="/collection" element={<Collection />} />
          <Route path="/trading" element={<Trade />} />
          <Route path="/store" element={<BuySell />} />
          <Route path="/about" element={<AboutMe />} />
        </Route>
      </Routes> */}
