import React from "react";
import { NavLink } from "react-router-dom";

export default function NotFound() {
       return (
              <div>
                     <div className="container">
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <br />
                            <h1 className="display-1 text-light text-center">
                                   404
                            </h1>
                            <div className="mb-4 lead  text-light text-center ">
                                   The page you are looking for was not found.
                            </div>
                            <br />
                            <br />
                            <div className="text-center">
                                   <NavLink
                                          exact
                                          to="/"
                                          className="link text-center btn btn-info"
                                   >
                                          Go to Home
                                   </NavLink>
                            </div>
                     </div>
              </div>
       );
}
