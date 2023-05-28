import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter}  from 'react-router-dom';
/*Nuevas importaciones*/
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
//import { Provider } from 'react-redux';
//import store from './redux/reducer/store';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
<React.StrictMode>

  <BrowserRouter>
  <App />
  </BrowserRouter>
 
  </React.StrictMode>

);


