import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
 createBrowserRouter,
 RouterProvider,
 Route,
 createRoutesFromElements,
} from "react-router-dom";

import Login from './pages/Login';
import Home from './pages/Home';
import Protect from './components/Protect';

const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<App />}>
   <Route path='login' element={<Login/>}/>
   <Route path='/' element={<Protect/>}>
    <Route path='home' element={<Home/>}/>
   </Route>

  </Route>

 )
)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();