import React from "react";

function DisplaySimpson({ simpson }) {
  return (
    simpson && (
      <div className="DisplaySimpson">
        <img src={simpson.image} alt={simpson.character} />
        <br/><br/>
        {simpson.character} said: <br/><br/> "{simpson.quote}"
      </div>
    )
  );
}

export default DisplaySimpson;
