import React, { useState } from 'react'
import Header from '../components/Header'
import { json } from 'react-router-dom'
import { MdEdit } from 'react-icons/md';
import { ref, set } from 'firebase/database';
import { database } from '../firebase';

const User = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const [readOnly,setReadOnly] = useState('readOnly');
  const [Name,setName] = useState('');
  const [warehouse,setWarehouse] = useState('');
  const [doj,setdoj] = useState('');
  const [employeeID,setemployeeID] = useState('');
  const [education,seteducation] = useState('');
  const [phone,setphone] = useState('');
  const [aadhar,setaadhar] = useState('');
  const [bank,setbank] = useState('');
  const eid = `E${user.uid.toUpperCase().slice(20)}`; 

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
        <section className='generate'>
        <input value={Name} onChange={(e) => {setName(e.target.value)}} readOnly={readOnly}  placeholder='Name' ></input>
        <MdEdit onClick={() => {setReadOnly('')}} className='edit' color='white' size={30} />
        </section>
        <section>
        <select value={warehouse} onChange={(e) => {setWarehouse(e.target.value)}}  className='Warehouse' color='white'>
         <option value='Chennai'>Chennai</option>
         <option value='Coimabatore'>Coimbatore</option>
         <option value='Mumbai'>Mumbai</option>
         <option value='Noida'>Noida</option>
         <option value='Hyderabad'>Hyderabad</option>
         <option value='Pune'>Pune</option>
         <option value='Chandigarh'>Chandigarh</option>
         <option value='Agra'>Agra</option>
         <option value='Trichy'>Trichy</option>
         <option value='Kochin'>Kochin</option>
         <option value='Kolkata'>Kolkata</option>
         <option value='Bangalore'>Bangalore</option>
         <option value='Sydney'>Sydney</option>
         <option value='Kuwait'>Kuwait</option>
         <option value='Germany'>Germany</option>
         <option value='Norway'>Norway</option>
         <option value='Busan'>Busan</option>
         <option value='Dubai'>Dubai</option>
         <option value='Singapore'>Singapore</option>
         <option value='Madagascar'>Madagascar</option>

        </select>
        </section>
        </div>
        <div className='input-side'>
        <input value={doj} onChange={(e) => {setdoj(e.target.value)}}   type='date' placeholder='Joining Date'></input>
        <input value={employeeID} onChange={(e) => {setemployeeID(e.target.value)}}  readOnly='readOnly' placeholder={eid}></input>
        </div>
        <div className='input-side'>
        <input value={education} onChange={(e) => {seteducation(e.target.value)}}  placeholder='Education'></input>
        <input value={phone} onChange={(e) => {setphone(e.target.value)}}   placeholder='Phone Number'></input>
        </div>
        <div className='input-side'>
        <input value={aadhar} onChange={(e) => {setaadhar(e.target.value)}}   placeholder='Adhaar Number'></input>
        <input value={bank} onChange={(e) => {setbank(e.target.value)}}  placeholder='Bank Account Number'></input>
        </div>
        <button onClick={(e) => {
         e.preventDefault();
         set(ref(database,'users/'+user.uid+'/Personal'),{
           warehouse: warehouse,
           doj: doj,
           employeeID: employeeID,
           education: education,
           phone: phone,
           aadhar: aadhar,
           bank: bank

         })
        }} className='update'>Update Profile</button>
        
        </div>
       </section>

     </form>
     
    </div>
   </div>
  )
}

export default User
