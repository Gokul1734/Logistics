import { signOut } from 'firebase/auth';
import React, { useState } from 'react'
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { RiNavigationFill } from 'react-icons/ri';

const Header = (props) => {
 const status = JSON.parse(props.status);
 console.log(status);
 const [display,setDisplay] = useState('Home');
 const [hovering,setHovering] = useState(false);
 localStorage.setItem('profileHover',hovering);
 const navigate = useNavigate();
 const user = JSON.parse(localStorage.getItem('user'));
 localStorage.setItem('Page',JSON.stringify(display));
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
   <div>
   <header className='header'>
    
    {status ?  <div className='header-left'>
     <a href='#' onClick={() => {setDisplay('Home')}}>Home</a>
     <a href='#' onClick={() => {setDisplay('About')}}>About us</a>
    <a href='#' onClick={() => {setDisplay('Contact')}}>Contact</a> 
    </div>   : <FaArrowCircleLeft onClick={() => {navigate('../Home')}} size='3em' color='white' className='button-back' />}

   <div className='profile-box'>
   <button className='button-logout' onClick={handleLogOut}>Logout</button>
   {/* <button className='profile'></button> */}
   <img 
    // onClick={() => {setHovering(!hovering)}}
    onMouseOver={()=>{setHovering(true)}}
    className='image' src={user.photoURL} alt=''/>
   </div>
   </header>
   <div className='header-out'>
    {hovering ?
    <div onMouseOver={()=>{setHovering(true)}}
    onMouseOut={() => {setHovering(false)}} className='floater'>
     <h2>Gokulpriyan Karthikeyan</h2>
     <h2>profile Display</h2>
     <h2>profile Display</h2>
     <h2>profile Display</h2>
     <h2>profile Display</h2>
     <h2>profile Display</h2>

     </div> : <div></div>}
   </div>
     </div>
  )
}

export default Header
