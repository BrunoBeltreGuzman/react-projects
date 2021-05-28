import React, { useState } from "react";
import App2 from "./App2";

function bobo() {
       console.log("mmg");
}

function bobo2() {
       console.log("mmg2");
}

function App() {
       return (
              <div>
                     <App2 bobo={bobo} bobo2={bobo2}></App2>
              </div>
       );
}

export default App;
