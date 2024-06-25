import React, {  useState } from 'react'
import Header from '../components/Header'
import { IoIosAddCircle } from 'react-icons/io'
import { FaCopy } from 'react-icons/fa';
import CB from '../components/CB';
import nextId, { setPrefix } from 'react-id-generator';
import { ref, set } from 'firebase/database';
import { database } from '../firebase';

const Truck = () => {
 const [Clipboard,setClipboard] = useState(false);
 const [loadTruck,setLoadTruck] = useState(false);
 const [RTO,setRTO] = useState('');
 const [Insurance,setInsurance] = useState('');
 const [Vehicle,setVehicle] = useState('');
 const [Permit,setPermit] = useState('');
 const [Regno,setRegno] = useState('');
 const [Regdate,setRegdate] = useState('');
 const [Capacity,setCapacity] = useState('');
 const [Dimension,setDimension] = useState('');
 const [Chassis,setChassis] = useState('');
 const [Warehouse,setWarehouse] = useState('');
 const [Tracker,setTracker] = useState('');
 const [Preview,setPreview] = useState(false);

 let Trucks = [
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',
  },
   {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',
  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Service',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
   {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Service',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Service',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Available',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Service',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Service',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Service',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
  {
   RTO : 'RTO123',
   Insurance : 'INS123',
   Vehicle : 'V12059',
   Warehouse:'Chennai',
   status : 'Transit',

  },
 ]


const [text,setText] = useState('');
 // console.log(
 //  {
 //   Regno:Regno,
 //   Regdate:Regdate,
 //   Capacity:Capacity,
 //   Dimension:Dimension,
 //   Chassis:Chassis,
 //   Warehouse:Warehouse,
 //   Tracker:Tracker,
 //  }
 // )
 


 
 const [vid,setVid] = useState('');

 function handleRTO(e) {
  console.log(e.target.files);
  try {
   setRTO(URL.createObjectURL(e.target.files[0]));
  }catch (error) {
   console.log(error);
  }
}
function handleInsurance(e) {
 console.log(e.target.files);
 try {
  setInsurance(URL.createObjectURL(e.target.files[0]));
 }catch (error) {
  console.log(error);
 }
}
function handleVehicle(e) {
 console.log(e.target.files);
 try {
  setVehicle(URL.createObjectURL(e.target.files[0]));
 }catch (error) {
  console.log(error);
 }
}
function handlePermit(e) {
 console.log(e.target.files);
 try {
  setPermit(URL.createObjectURL(e.target.files[0]));
 }catch (error) {
  console.log(error);
 }
}


  return (
    <div className='container'>
     <Header status='false'/>
     <div className='navbar-truck'>
      <button onClick={()=> {setLoadTruck(!loadTruck)}} className='addTruck'>
       <p>
        {loadTruck ? 'Show Available Trucks ' : 'Add Truck'}
       </p>{!loadTruck && <IoIosAddCircle size='1em'/>}</button>
     </div>
     {loadTruck ? 
      <div className='container'>
       <form className='half-container'>
       <section className='input-div'>
        <div className='inputs'>
        <div className='input-side'>
        <input value={Regno} onChange={(e) => {setRegno(e.target.value)}} placeholder='Enter Truck Registration Number' ></input>
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
        <input value={Regdate} onChange={(e) => {setRegdate(e.target.value)}} type='date' placeholder='Enter Truck Registration Date'></input>
        <input value={Capacity} onChange={(e) => {setCapacity(e.target.value)}} type='number' placeholder='Enter Truck Capacity (Kgs)'></input>
        </div>
        <div className='input-side'>
        <input value={Dimension} onChange={(e) => {setDimension(e.target.value)}} placeholder='Enter Truck Dimensions (cm X cm X cm)'></input>
        <input placeholder='Enter Truck Load Type'></input>
        </div>
        <div className='input-side'>
        <input value={Chassis} onChange={(e) => {setChassis(e.target.value)}} placeholder='Enter Engine Chassis Number'></input>
        <input value={Warehouse} onChange={(e) => {setWarehouse(e.target.value)}} placeholder='Enter Primary Warehouse'></input>
        </div>
        <div className='input-side'>
        <input value={Tracker} onChange={(e) => {setTracker(e.target.value)}} placeholder='Enter Tracker Number'></input>
        <section className='generate'><input readOnly='readOnly' value={vid} onChange={(event) => {setVid(event.target.value)}} placeholder='Generate Vehicle ID'></input><button onClick={(e) => {
         // vid.select();
         e.preventDefault();
         setClipboard(true);
         setText('Copied to Clipboard');
         setTimeout(() => {
          setClipboard(false);
          setText('');
         },2000);
         navigator.clipboard.writeText(vid)
         const VehicleDetails = {
          Regno:Regno,
          Regdate:Regdate,
          Capacity:Capacity,
          Dimension:Dimension,
          Chassis:Chassis,
          Warehouse:Warehouse,
          Tracker:Tracker,
          RTO:RTO,
          Permit:Permit,
          Insurance:Insurance,
          Vehicle:Vehicle,
          vid:vid
         };
        }} ><FaCopy/></button></section>
        </div>
        
        </div>
        <div className='Tbutton-group'>
        <button onClick={ (e) => {
 e.preventDefault();
 
 setPreview(!Preview);

 
}}>Save and Preview</button>
        <button onClick={(e) => {
         // vid.select();
         e.preventDefault();
         setPrefix(`V${Regno.slice(6)}`)
         setVid(nextId());
         setText('Generated ID Successfully');
         setClipboard(true);
         setTimeout(() => {
          setClipboard(false);
          setText('');
         },2000);
         navigator.clipboard.writeText(vid)
        }}>Generate ID</button>

        </div>
       </section>
       <section className='photos-div'>
        <div>
        <div><input  onClick={handleRTO}  type='file' id='RTO' /><label for='RTO' >Vehicle Registration{RTO ? <img alt='regproof' src={RTO}/>: <IoIosAddCircle color='gray' size='4em'/>}</label></div>
        <div><input  onClick={handleInsurance} type='file' id='Insurance' /><label for='Insurance' >Insurance Copy{Insurance ? <img alt='insurance' src={Insurance}/>: <IoIosAddCircle color='gray' size='4em'/>}</label></div>
        </div>
        <div>
        <div><input  onClick={handleVehicle} type='file' id='Vehicle' /><label for='Vehicle' >Vehicle Image{Vehicle ? <img alt='Vehicle' src={Vehicle}/>: <IoIosAddCircle color='gray' size='4em'/>}</label></div>
        <div><input  onClick={handlePermit} type='file' id='Permit' /><label for='Permit' >Logistics Permit{Permit ? <img alt='Permit' src={Permit}/>: <IoIosAddCircle color='gray' size='4em'/>}</label></div>
        
        </div>
       </section>
       
       </form>
       {Clipboard && <CB text={text}/> }
      </div> : 
      <div className='container'>
       {/* <h1>Trucks Display</h1> */}
       <div className='container-grid'>
        {Trucks.map((truck) => {
         return (
          <div>
           <div className='truckImage'><img/></div>
           <section>
           <section>
           <h1>{truck.Vehicle}</h1>
           <p>{truck.Warehouse}</p>
           </section>
           <section>
           <button className={`button-${truck.status}`} >{truck.status}</button>
           </section>
           
           </section>
          </div>
         )
        })}
         <div className='Footer'></div>
         <div className='Footer'></div>
         <div className='Footer'></div>
         <div className='Footer'></div>
       </div>
      </div>
      
     }
     {Preview && 
       <div className='preview'>
        <h2>Preview</h2>
        <div>
         <h4>Unique ID : {vid}</h4>
         <h4>Registration Number : {Regno}</h4>
         <h4>Registration Date : {Regdate}</h4>
         <h4>Truck Capacity : {Capacity}</h4>
         <h4>Dimensions : {Dimension}</h4>
         <h4>Engine Chassis Number : {Chassis}</h4>
         <h4>Primary WareHouse : {Warehouse}</h4>
         <h4>GPS Tracker Number : {Tracker}</h4>
        </div>
        <button onClick={() => {
         setPreview(false);
         set(ref(database,'Trucks/'+vid),{
          Regno:Regno,
          Regdate:Regdate,
          Capacity:Capacity,
          Dimension:Dimension,
          Chassis:Chassis,
          Warehouse:Warehouse,
          Tracker:Tracker,
          RTO:RTO,
          Permit:Permit,
          Insurance:Insurance,
          Vehicle:Vehicle,
         })
         }}>Save Truck</button>
       </div>}
    </div>
  )
}

export default Truck
