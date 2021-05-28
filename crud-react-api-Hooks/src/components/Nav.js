import React, { Component } from "react";
import logo from "../logo.svg";

export default class Nav extends Component {
       render() {
              return (
                     <div className="container">
                            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                                   <div className="container">
                                          <a className="navbar-brand" href="/">
                                                 <img
                                                        width="15%"
                                                        src={logo}
                                                        className="App-logo"
                                                        alt="logo"
                                                 />
                                                 React+Api
                                          </a>

                                          <div
                                                 className="collapse navbar-collapse"
                                                 id="navbarSupportedContent"
                                          >
                                                 <ul className="navbar-nav ml-auto">
                                                        <button
                                                               className="btn btn-secondary"
                                                               id="btnUser"
                                                        >
                                                               <i className="fas fa-user"></i>
                                                        </button>
                                                 </ul>
                                          </div>
                                   </div>
                            </nav>
                     </div>
              );
       }
}
