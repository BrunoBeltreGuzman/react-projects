import React from "react";

import Layout from "../layouts/Layout";

const Contact = () => (
       <Layout>
              <div className="container p-4">
                     <div className="row">
                            <div className="col-md-4 mx-auto">
                                   <div className="card text-white bg-dark text-center signin">
                                          <br />
                                          <br />
                                          <h3 className="display-4">Contact</h3>
                                          <p className="text-secondary">
                                                 Send Message
                                          </p>
                                          <br />
                                          <div className="card-body">
                                                 <form>
                                                        <div className="form-group">
                                                               <input
                                                                      type="email"
                                                                      name="email"
                                                                      placeholder="Email "
                                                                      className="form-control"
                                                                      required="text"
                                                                      autofocus
                                                               />
                                                        </div>
                                                        <br />
                                                        <div className="form-group">
                                                               <textarea
                                                                      name="message"
                                                                      id="mesage"
                                                                      rows="3"
                                                                      placeholder="Message "
                                                                      className="form-control"
                                                                      required="text"
                                                               ></textarea>
                                                        </div>
                                                        <br />
                                                        <br />
                                                        <div className="col text-center">
                                                               <button className="btn btn-success w-50">
                                                                      Send
                                                               </button>
                                                        </div>
                                                        <br />
                                                        <br />
                                                 </form>
                                          </div>
                                   </div>
                            </div>
                     </div>
              </div>
       </Layout>
);

export default Contact;
