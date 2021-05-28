import React from "react";
import { NavLink } from "react-router-dom";

import Layout from "../layouts/Layout";

const About = () => (
       <Layout>
              <div>
                     <div className="container">
                            <h1 className="display-1">Lorem</h1>
                            <hr />
                            <p className="text-secundare">
                                   Lorem, ipsum dolor sit amet consectetur
                                   adipisicing elit. Libero corporis id corrupti
                                   molestiae, esse quibusdam quam, placeat
                                   minima laborum eligendi error. Non sint porro
                                   voluptates perferendis sed assumenda
                                   consectetur cupiditate.
                            </p>
                            <br />
                            <br />
                            <br />
                            <div className="container col text-center">
                                   <NavLink
                                          exact
                                          to="/"
                                          className="btn btn-secondary"
                                   >
                                          Go to Home
                                   </NavLink>
                            </div>
                     </div>
              </div>
       </Layout>
);

export default About;
