import "./App.css";
import React, { useState } from "react";
import axios from "axios";
import DisplaySimpson from "./components/DisplaySimpson";

// initialise state with initial quote, obtained from this API.💚
// button to retrieve quote, character, photo and quote


const sampleSimpson = {
  quote: "For once maybe someone will call me \"sir\" without adding, \"You're making a scene.\"",
  character: "Homer Simpson",
};

function App() {
  const [simpson, setSimpson] = useState(sampleSimpson);
  const getSimpson = () => {
    // Send the request
    axios
      .get("https://simpsons-quotes-api.herokuapp.com/quotes")
      // Extract the DATA from the received response
      .then((response) => response.data)
      // Use this data to update the state
      .then((data) => {
        setSimpson(data[0]);
      });
  };

  return (
    <div className="App">
      <DisplaySimpson simpson={simpson} />
      <br/>
      <button type="button" onClick={getSimpson}>
        Get Simpson
      </button>
    </div>
  );
}

export default App;
