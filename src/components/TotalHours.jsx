import { React, useState, useEffect } from "react";
import axios from "axios";

function TotalHours() {
  const [hrs, setHrs] = useState();

  useEffect(() => {
    total();
  }, []);

  function total() {
    axios
      .get("http://localhost:3333/hrs")
      .then((res) => setHrs(res.data[0][0].sum));
  }

  function handleDelete() {
    axios
      .delete("http://localhost:3333/deleteAll")
      .then((res) => console.log(res.data));
  }
  return (
    <>
      <div className="total">{hrs}</div>
      <div>
        <button onClick={handleDelete}>Delete All</button>
      </div>
    </>
  );
}

export default TotalHours;
