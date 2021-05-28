import React from "react";

export default function List(props) {
       return (
              <div className="col-md-7">
                     <form className="form-inline my-2 my-lg-0">
                            <input
                                   id="textSearch"
                                   className="form-control bg bg-dark text-light"
                                   style={{ width: "100%" }}
                                   type="search"
                                   placeholder="Search"
                                   aria-label="Search"
                            />
                            <br />
                     </form>
                     <br />
                     <p id="textMessage">3 registros 20/11/2020</p>
                     <table className="table table-condensed table-hover">
                            <thead>
                                   <tr>
                                          <th>#</th>
                                          <th>Nombre</th>
                                          <th>Correo</th>
                                          <th></th>
                                   </tr>
                            </thead>
                            <tbody id="tableBody">
                                   {props.users.map(function (user, index) {
                                          return (
                                                 <tr key={index}>
                                                        <td>{index + 1}</td>
                                                        <td>{user.name}</td>
                                                        <td>{user.email}</td>
                                                        <td>
                                                               <div className="btn-group float-right">
                                                                      <div className="px-3">
                                                                             <button className="btn btn-warning">
                                                                                    <i className="far fa-edit"></i>
                                                                             </button>
                                                                      </div>
                                                                      <div className="px-2">
                                                                             <button className="my-btn-delete btn btn-danger">
                                                                                    <i className="far fa-trash-alt"></i>
                                                                             </button>
                                                                      </div>
                                                               </div>
                                                        </td>
                                                 </tr>
                                          );
                                   })}
                            </tbody>
                     </table>
              </div>
       );
}
