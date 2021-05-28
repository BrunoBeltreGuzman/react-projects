import React, { Component } from "react";
import App2 from "./App2";

class App extends Component {
       constructor(props) {
              super(props);

              this.increment = this.increment.bind(this);

              this.state = {
                     num: 0,
              };
       }

       increment() {
              this.setState({ num: this.state.num + 1 });
       }

       render() {
              return (
                     <div>
                            <App2
                                   num={this.state.num}
                                   increment={this.increment}
                            />
                     </div>
              );
       }
}

export default App;
