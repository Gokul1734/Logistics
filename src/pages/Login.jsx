import React from 'react'
import GoogleButton from 'react-google-button'
import './Login.css'
import { signInWithPopup } from 'firebase/auth'
import { auth, database, googleAuthProvider } from '../firebase'
import {  useNavigate } from 'react-router-dom'
import { ref, set } from 'firebase/database'

const Login = () => {
  const navigate = useNavigate();
  const handleSignInWithGoogle = async () => {
   try {
    const result = await signInWithPopup(auth,googleAuthProvider);
    localStorage.setItem('token',result.user.accessToken)
    localStorage.setItem('user',JSON.stringify(result.user))
    set(ref(database,'users/'+result.user.uid),{
     name:result.user.displayName,
     email:result.user.email,
     profilePic:result.user.photoURL
    })
    console.log(result);
    navigate('/home')
   }catch (error) {
    console.error(error);
   }
  }
  return (
    <div className='container'>
      <h1>Login</h1>
      <GoogleButton
       type="dark" // can be light or dark
       onClick={handleSignInWithGoogle}
     />
    </div>
  )
}




export default Login
