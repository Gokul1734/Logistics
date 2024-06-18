import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  // const display = 'Home';
  return (
   <div className='container'>
    <Header/>
     <div className='container'>
     <h1>Welcome to my React App {user.displayName} !</h1>
     <img className='image' src={user.photoURL} alt=''/>
     <button onClick={() => {navigate('../customers')}} >Go to Customers Page</button>
    </div>
    </div>
  )
}

export default Home
