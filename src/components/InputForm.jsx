import React from 'react'
import { useState } from 'react'
import axios from 'axios'

function Input() {
  const [ro, setRo] = useState();
  const [vehicle, setVehicle] = useState('');
  const [insurance, setInsurance] = useState('');
  const [hrs, setHrs] = useState();

  function addVehicle() {
    const body = {
      
    }
    axios.post('http://localhost:3000/cars', body).then(res => {
      console.log(res.data)
    })
  }

  return (
    <div>
      <form className="form">
        <label>
        Add New Job: 
        <input className="input" type="text" placeholder="RO" value={ro} onChange={(e) => setRo(e.target.value)}></input>
        </label>
        <input className="input" type="text" placeholder="Vehicle" value={vehicle} onChange={(e) => setVehicle(e.target.value)}></input>
        <input className="input" type="text" placeholder="Insurance" value={insurance} onChange={(e) => setInsurance(e.target.value)}></input>
        <input className="input" type="text" placeholder="HRS" value={hrs} onChange={(e) => setHrs(e.target.value)}></input>
        {/* <input type="text" placeholder=""></input> */}
        <button className="input" type="submit" onClick={addVehicle}>ADD JOB</button>
      </form>
      
    </div>
  )
}

export default Input