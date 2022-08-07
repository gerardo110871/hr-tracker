import {React, useState, useEffect} from 'react'
import axios from 'axios'

function TotalHours() {
const [hrs, setHrs] = useState()

    useEffect(() => {
        total();
      }, []);

    function total() {
        axios.get('http://localhost:3333/hrs')
            .then(res => setHrs(res.data[0][0].sum))
}
  return (
    <div className="total">
        {hrs}
    </div>
  )
}

export default TotalHours