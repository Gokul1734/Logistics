import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const Header = () => {
 const [display,setDisplay] = useState('Home');
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
   <header className='header'>
   <div className='header-left'>
    <img src=''/>
    <a href='#' onClick={() => {setDisplay('Home')}}>Home</a>
    <a href='#' onClick={() => {setDisplay('About')}}>About us</a>
    <a href='#' onClick={() => {setDisplay('Contact')}}>Contact</a>

   </div>
   <div className='profile-box'>
   <button className='button-logout' onClick={handleLogOut}>Logout</button>
   <button className='profile'><img className='image' src={user.photoURL} alt=''/></button>
   </div>
   </header>
  )
}

export default Header
