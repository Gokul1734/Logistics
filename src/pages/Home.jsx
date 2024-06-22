import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const display = JSON.parse(localStorage.getItem('Page'));
  const hovering = JSON.parse(localStorage.getItem('profileHover'));
  console.log(hovering);

  const renderPage = () => {
   switch(display) {
    case 'Home':
     return (
      <div className='container'>
       <h1>Welcome to my React App {user.displayName}!</h1>
       <div className='header-group'>
       <button onClick={() => {navigate('../customers')}} >Customers</button>
       <button onClick={() => {navigate('../truck')}} >Trucks</button>
       </div>

      </div>
    );
    case 'About':
     return (
     <div className='container'>
     <h1>Welcome to About Us Page</h1>
    </div>
    )
    case 'Contact':
     return (
     <div className='container'>
     <h1>Welcome to Contact Page</h1>
    </div>)
   }
  }
  // const display = 'Home';
  return (
   <div className='container'>
    <Header status='true'/>
    {renderPage()}
    </div>
  )
}

export default Home
