import logo from "./logo.svg";
import "./App.css";
import { Component } from "react";

//Impor Componet
import Users from "./Users";

export class App extends Component {
       constructor(props) {
              super(props);

              //Hacer la funcion referente a la clase (bind(this))
              this.incrementar = this.incrementar.bind(this);

              this.state = {
                     usersArr: ["bobo1", "bobo2", "bobo3"], // users: []
                     users: [
                            {
                                   name: "bobo1",
                                   age: 20,
                            },
                            {
                                   name: "bobo2",
                                   age: 20,
                            },
                            {
                                   name: "bobo3",
                                   age: 20,
                            },
                     ],

                     number: 0,
              };
       }
       render() {
              const person = {
                     name: "Bobo",
                     ocopation: "Student",
              };
              const { name: bobo } = person;
              const styles = {
                     color: "red",
                     backgroundColor: "black",
              };
              return (
                     <div className="container">
                            {/* Elementos */}
                            <h1>Hello Word!</h1>
                            <p>Bobo</p>
                            <h6>
                                   Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Molestiae voluptatum
                                   labore, quo doloremque earum nam dolor esse
                                   incidunt architecto, natus necessitatibus
                                   odit dolores sint nobis magni explicabo
                                   corporis accusantium provident?
                            </h6>
                            {/*  para usa JavaScrip {} */}
                            {/*  Mostra json */}
                            <h4>{JSON.stringify(person)}</h4>
                            {/* Elementos de json */}
                            <h1>
                                   Hello I am {person.name} and i am a{" "}
                                   {person.ocopation}
                            </h1>
                            <h2>Hello {bobo} klk</h2>
                            {/* Style de css */}
                            <h1 style={{ color: "red" }}>Hello Word!</h1>
                            {/* Objeto de Style css */}
                            <h1 style={styles}>Bobo</h1>
                            {/* install bootstrap npm install bootstrap and import in index.js */}
                            {/*  class de bootstrap (use className) */}
                            <p className="p text-success">
                                   Lorem ipsum dolor sit amet consectetur
                                   adipisicing elit. Saepe, vel nobis fugit
                                   eligendi consequatur velit beatae eveniet cum
                                   soluta ab! Est optio consequuntur minima
                                   natus dicta harum? Perspiciatis, voluptate
                                   adipisci.
                            </p>
                            {/* Agregar styles con una function */}
                            <h1 className={this.classFun()}>Hello Word!</h1>
                            {/* Agregar styles con una function con logica*/}
                            <h1 className={this.classFunLogica()}>Messge</h1>
                            {/* Mondar datos con map()*/}
                            <ul>
                                   {this.state.usersArr.map(function (
                                          usersArr
                                   ) {
                                          return <li>{usersArr}</li>;
                                   })}
                            </ul>
                            {/* Mondar datos con map() con key unique*/}
                            <ul>
                                   {this.state.users.map(function (
                                          users,
                                          index
                                   ) {
                                          return (
                                                 <li key={index}>
                                                        {"id: " +
                                                               index +
                                                               "  name: " +
                                                               users.name +
                                                               " age: " +
                                                               users.age}
                                                 </li>
                                          );
                                   })}
                            </ul>
                            {/*  */}
                            {/* Eventos */}
                            <button
                                   onClick={this.event}
                                   className="btn btn-primary"
                            >
                                   Event
                            </button>
                            <br />
                            <br />
                            {/* Envento para incrementar*/}
                            <button
                                   onClick={this.incrementar}
                                   className="btn btn-success h1"
                            >
                                   +
                            </button>
                            {"            "}
                            {/* Envento para desCrementar*/}
                            {/* Hacer la funcion referente a la clase (bind(this)) */}
                            <button
                                   onClick={this.desCrementar.bind(this)}
                                   className="btn btn-danger h1"
                            >
                                   -
                            </button>
                            <h1 className="display-3">{this.state.number}</h1>
                            {/* Import Component*/}
                            <Users />
                            <Users />
                            <Users />
                            <br />
                            <br />
                            {/* Import Component send parametrs por construtor*/}
                            <Users
                                   parametr1={this.state.usersArr}
                                   parametr2={this.state.users}
                                   parametr3={this.state.number}
                            />
                            <br />
                            <br />
                            {/* Import Component children props*/}
                            {/* Send HTML to children props*/}
                            <Users>
                                   <h1>Ento es un HTML</h1>
                            </Users>

                            <br />
                            <br />
                            <br />
                            <br />
                     </div>
              );
       }

       //Code:

       classFun() {
              return "text-primary";
       }

       classFunLogica() {
              return this.state.users.length > 0
                     ? "text-success"
                     : "text-danger";
       }

       //Events

       event() {
              alert("Esto es un evento");
       }

       incrementar() {
              console.log("Event increment");
              this.setState({
                     number: this.state.number + 1,
              });
       }

       desCrementar() {
              console.log("Event desCrementar");
              this.setState({
                     number: this.state.number - 1,
              });
       }
}
export default App;
