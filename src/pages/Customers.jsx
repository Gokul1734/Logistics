import React from 'react'
import Header from '../components/Header';

const Customers = () => {
  const display = JSON.parse(localStorage.getItem('Page'));
  return (
    <div className='container'>
      <Header status='false'/>
      <div className='container'></div>
    </div>
  )
}

export default Customers
