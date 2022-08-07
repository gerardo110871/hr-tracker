import { React } from "react";

function List({ ro, vehicle, insurance, hrs }) {
  // console.log(ro)
  return (
    <div className="list-container">
      <p>{ro}</p>
      <p>{vehicle}</p>
      <p>{insurance}</p>
      <p>{hrs}</p>
    </div>
  );
}

export default List;
