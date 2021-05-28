//create Component
//De manera rapida user rcc
import React, { Component } from "react";

export default class Users extends Component {
       constructor(props) {
              super(props);

              //get parametrs(in props)
              console.log(props);
       }
       render() {
              //get parametr HTML
              const { children } = this.props;

              const bobo = {
                     name: "Bobo",
                     ocopation: "Student",
              };

              //Component
              return (
                     <h1>
                            Hello i am {bobo.name}, and i am a {bobo.ocopation}
                            {/* Mostrando children props */}
                            {children}
                     </h1>
              );
       }
}
