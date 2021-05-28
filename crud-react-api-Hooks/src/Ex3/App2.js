import React, { useState } from "react";

function useNum(value, incre) {
       const [num, setNum] = useState(value);
       const increment = function () {
              setNum(num + incre);
       };
       return { num, increment };
}

function App2(props) {
       props.bobo();
       props.bobo2();
       const { num, increment } = useNum(2, 2);
       return (
              <div>
                     <h1>{num}</h1>
                     <br />
                     <br />
                     <button onClick={increment}>++</button>
              </div>
       );
}

export default App2;
