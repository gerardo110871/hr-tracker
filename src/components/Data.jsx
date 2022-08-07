import React, { useEffect, useState } from "react";
import axios from "axios";
import List from "./List";

function Data() {
  const [allData, setAllData] = useState([]);


  useEffect(() => {
    getInfo();
  }, []);

  function getInfo() {
    axios
      .get("http://localhost:3333/cars")
      .then((res) => setAllData(res.data[0]));
  }

  return (
    <main>
      {allData.map((data) => {
        return (
          <List
            key={data.id}
            id={data.id}
            ro={data.ro}
            vehicle={data.vehicle}
            insurance={data.insurance}
            hrs={data.hrs}
          /> 
        );
      })}
    </main>
  );
}

export default Data;