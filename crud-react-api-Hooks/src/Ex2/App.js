import React, { useState } from "react";

function App() {
       const [num, setNum] = useState(0);
       const increment = function () {
              setNum(num + 1);
       };
       return (
              <div>
                     <h1>{num}</h1>
                     <br />
                     <br />
                     <button onClick={increment}>++</button>
              </div>
       );
}

export default App;
