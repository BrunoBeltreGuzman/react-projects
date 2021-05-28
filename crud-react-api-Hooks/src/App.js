import React, { useState, useEffect } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import List from "./components/List";
import Controller from "./scripts/requestApis/users/controller";

const controllerUser = new Controller();

function FetchAll() {
       const [error, setError] = useState(null);
       const [isLoaded, setIsLoaded] = useState(false);
       const [items, setItems] = useState([]);
       useEffect(function () {
              fetch("http://localhost/apis-rest-php/apis/users/fetchAll")
                     .then((res) => res.json())
                     .then(
                            function (result) {
                                   setIsLoaded(true);
                                   setItems(result);
                            },
                            function (error) {
                                   setIsLoaded(true);
                                   setError(error);
                            }
                     );
       }, []);
       return { error, items, isLoaded };
}

function Bobo() {
       const [error, setError] = useState(null);
       const [isLoaded, setIsLoaded] = useState(false);
       const [items, setItems] = useState([]);
       useEffect(function () {
              fetch("http://localhost/apis-rest-php/apis/users/fetchAll")
                     .then((res) => res.json())
                     .then(
                            function (result) {
                                   setIsLoaded(true);
                                   setItems(result);
                            },
                            function (error) {
                                   setIsLoaded(true);
                                   setError(error);
                            }
                     );
       }, []);
}

function App() {
       const { error, isLoaded, items } = FetchAll();
       return (
              <div>
                     <Nav></Nav>
                     <br />
                     <br />
                     <br />
                     <br />
                     <div className="container ">
                            <div className="row p-4">
                                   <div className="col-md-5">
                                          <div className="card bg bg-dark">
                                                 <div className="card-body">
                                                        <Form
                                                               fetchAll={Bobo}
                                                        ></Form>
                                                 </div>
                                                 users
                                          </div>
                                   </div>
                                   {(function () {
                                          if (error) {
                                                 return (
                                                        <div>
                                                               Error:{" "}
                                                               {error.message}
                                                        </div>
                                                 );
                                          } else if (!isLoaded) {
                                                 return <div>Loading...</div>;
                                          } else {
                                                 return (
                                                        <List
                                                               users={items}
                                                        ></List>
                                                 );
                                          }
                                   })()}
                            </div>
                     </div>
              </div>
       );
}

export default App;
