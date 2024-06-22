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
import Customers from './pages/Customers';
import Truck from './pages/Truck';
import User from './pages/User';

const height = window.innerHeight;
const width = window.innerWidth;

document.documentElement.style.setProperty('--doc-height', `${height}px`)
document.documentElement.style.setProperty('--doc-width', `${width}px`)


const router = createBrowserRouter(
 createRoutesFromElements(
  <Route path='/' element={<App/>}>
   <Route path='login' element={<Login/>}/>
   <Route path='/' element={<Protect/>}>
    <Route path='home' element={<Home/>}/>
    <Route path='customers' element={<Customers/>}/>
    <Route path='truck' element={<Truck/>}/>
    <Route path='user' element={<User/>}/>

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
