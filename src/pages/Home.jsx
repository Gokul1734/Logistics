import React from 'react'
import './Home.css'
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));
  const handleLogOut = async () => {
   try {
    await signOut(auth);
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/login')
   } catch (error) {
    console.log(error);
   }
  }
  return (
    <div className='container'>
     <h1>Welcome to my React App {user.displayName} !</h1>
     <img src={user.photoURL} alt=''/>
     <button onClick={handleLogOut}>Logout</button>
      
    </div>
  )
}

export default Home
