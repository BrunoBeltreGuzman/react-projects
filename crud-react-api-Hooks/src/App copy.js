import React, { Component } from "react";
import Nav from "./components/Nav";
import Form from "./components/Form";
import List from "./components/List";
import Controller from "./scripts/requestApis/users/controller";

class App extends Component {
       constructor(props) {
              super(props);

              this.fetchAll = this.fetchAll.bind(this);
              this.controllerUser = new Controller();

              this.state = {
                     users: [],
                     delete: this.delete,
              };
       }
       componentDidMount() {
              this.fetchAll();
       }

       async fetchAll() {
              const result = await this.controllerUser.fetchAll();
              this.setState({ users: JSON.parse(result) });
       }

       render() {
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
                                                                      fetchAll={
                                                                             this
                                                                                    .fetchAll
                                                                      }
                                                               ></Form>
                                                        </div>
                                                        users
                                                 </div>
                                          </div>
                                          <List users={this.state.users}></List>
                                   </div>
                            </div>
                     </div>
              );
       }
}

export default App;
