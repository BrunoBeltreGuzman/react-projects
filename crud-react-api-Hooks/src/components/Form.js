import React, { Component } from "react";
import Controller from "../scripts/requestApis/users/controller";

const controllerUser = new Controller();

async function eventSaveUser(event) {
       event.preventDefault();
       const name = event.target.name.value;
       const email = event.target.email.value;
       const password = event.target.password.value;
       const boo = await controllerUser.insert(name, email, password);
       if (boo) {
              message("User saved successfully");
       } else {
              message("Opp!, There was an error registering the user");
       }
       document.getElementById("userForm").reset();
}

function message(text) {
       alert(text);
}

export default function Form(props) {
       return (
              <form
                     onSubmit={function (event) {
                            eventSaveUser(event);
                            props.fetchAll();
                     }}
                     id="userForm"
              >
                     <br />
                     <h2 className="text text-light text-center">Formulario</h2>
                     <p className="text-light text-center">
                            Registré datos ha MySQL
                     </p>
                     <br />
                     <div className="form-group">
                            <label className="text text-light" htmlFor="nombre">
                                   Nombre:
                            </label>
                            <div className="input-group">
                                   <div className="input-group-prepend">
                                          <span className="input-group-text bg bg-dark">
                                                 <i className="fas fab fa-react"></i>
                                          </span>
                                   </div>
                                   <input
                                          type="text"
                                          required="text"
                                          className="form-control bg bg-dark text text-light"
                                          id="name"
                                   />
                            </div>
                     </div>
                     <div className="form-group">
                            <label className="text text-light" htmlFor="email">
                                   Correo:
                            </label>
                            <div className="input-group">
                                   <div className="input-group-prepend">
                                          <span className="input-group-text bg bg-dark">
                                                 <i className="fas fa-envelope"></i>
                                          </span>
                                   </div>
                                   <input
                                          type="email"
                                          required="email"
                                          className="form-control bg bg-dark text text-light"
                                          id="email"
                                   />
                            </div>
                     </div>
                     <div className="form-group">
                            <label
                                   className="text text-light"
                                   htmlFor="passWord"
                            >
                                   Password:
                            </label>
                            <div className="input-group">
                                   <div className="input-group-prepend">
                                          <span className="input-group-text bg bg-dark">
                                                 <i className="fas fa-key"></i>
                                          </span>
                                   </div>
                                   <input
                                          type="password"
                                          required="text"
                                          className="form-control bg bg-dark text text-light"
                                          id="password"
                                   />
                            </div>
                     </div>
                     <br />
                     <br />
                     <div className="col text-center">
                            <input
                                   type="submit"
                                   id="btnSave"
                                   className="btn btn-success text-center w-50"
                                   value="SAVE"
                            />
                     </div>
                     <br />
              </form>
       );
}
