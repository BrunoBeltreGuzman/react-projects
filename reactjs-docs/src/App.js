import React from "react";

class Parent extends React.Component {
       constructor(props) {
              super(props);
              this.state = { count: 0 };

              this.outputEvent = this.outputEvent.bind(this);
       }
       outputEvent(event) {
              // the event context comes from the Child
              this.setState({ count: this.state.count + 1 });
       }

       render() {
              const variable = 5;
              return (
                     <div>
                            Count: {this.state.count}
                            <Child clickHandler={this.outputEvent} />
                     </div>
              );
       }
}

class Child extends React.Component {
       render() {
              return (
                     <button onClick={this.props.clickHandler}>
                            Add One More
                     </button>
              );
       }
}

export default Parent;
