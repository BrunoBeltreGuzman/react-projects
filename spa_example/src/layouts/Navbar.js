import React from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
       return (
              <div>
                     <div>
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar">
                                   <div className="container">
                                          <NavLink
                                                 exact
                                                 to="/"
                                                 className="navbar-brand"
                                          >
                                                 <h4>SPA</h4>
                                          </NavLink>
                                          <button
                                                 className="navbar-toggler"
                                                 type="button"
                                                 data-toggle="collapse"
                                                 data-target="#navbarNav"
                                                 aria-controls="navbarNav"
                                                 aria-expanded="false"
                                                 aria-label="Toggle navigation"
                                          >
                                                 <span className="navbar-toggler-icon"></span>
                                          </button>
                                          <div
                                                 className="collapse navbar-collapse"
                                                 id="navbarNav"
                                          >
                                                 <ul className="navbar-nav ml-auto">
                                                        <li className="nav-item">
                                                               <NavLink
                                                                      exact
                                                                      to="/"
                                                                      className="nav-link"
                                                                      activeClassName="btn btn-primary"
                                                               >
                                                                      Home
                                                               </NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                               <NavLink
                                                                      to="/about"
                                                                      className="nav-link"
                                                                      activeClassName="btn btn-primary"
                                                               >
                                                                      About
                                                               </NavLink>
                                                        </li>

                                                        <li className="nav-item">
                                                               <NavLink
                                                                      to="/contact"
                                                                      className="nav-link"
                                                                      activeClassName="btn btn-primary"
                                                               >
                                                                      Contact
                                                               </NavLink>
                                                        </li>
                                                 </ul>
                                          </div>
                                   </div>
                            </nav>
                     </div>
              </div>
       );
}
