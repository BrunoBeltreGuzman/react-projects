import React, { Component } from "react";

class App2 extends Component {
       constructor(props) {
              super(props);
       }

       render() {
              return (
                     <div>
                            <h1>{this.props.num}</h1>
                            <br />
                            <br />
                            <button onClick={this.props.increment}>++</button>
                     </div>
              );
       }
}

export default App2;
