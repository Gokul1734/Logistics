import React from 'react'
import Header from '../components/Header'
import { json } from 'react-router-dom'

const User = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
   <div className='container'>
    <Header status='false'/>
    <div className='container-user'>
     <img src={user.photoURL} className='image-profile' alt='Profile'/>
     <h1 className='name'>{user.displayName}</h1>
     <div className='user-records'>
      <div>
       <h3>Successful Transits</h3>
       <h2>100+</h2>
       </div>
      <div>
      <h3>Designation</h3>
       <h2>Manager</h2></div>
      <div>
      <h3>Age</h3>
       <h2>35</h2></div>
      <div className='last'>
       <h3>Experience</h3>
       <h2 >2 years</h2></div>
     </div>
     <form className='half-container'>
       <section className='input-div'>
        <div className='inputs'>
        <div className='input-side'>
        <input  placeholder='Enter Truck Registration Number' ></input>
        <section>
        <select className='Brand' color='white'>
         <option value='Volvo'>Volvo</option>
         <option value='Scanda'>Scanda</option>
         <option value='Benz'>Benz</option>
         <option value='MAN'>MAN</option>
        </select>
        </section>
        </div>
        <div className='input-side'>
        <input  type='date' placeholder='Enter Truck Registration Date'></input>
        <input type='number' placeholder='Enter Truck Capacity (Kgs)'></input>
        </div>
        <div className='input-side'>
        <input placeholder='Enter Truck Dimensions (cm X cm X cm)'></input>
        <input placeholder='Enter Truck Load Type'></input>
        </div>
        <div className='input-side'>
        <input  placeholder='Enter Engine Chassis Number'></input>
        <input placeholder='Enter Primary Warehouse'></input>
        </div>
        <div className='input-side'>
        <input  placeholder='Enter Tracker Number'></input>
        </div>
        
        </div>
       </section>

     </form>
     
    </div>
   </div>
  )
}

export default User
