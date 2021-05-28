import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";

function App() {
       return (
              <Router>
                     <Switch>
                            <Route exact path="/about">
                                   <About></About>
                            </Route>

                            <Route exact path="/contact">
                                   <Contact></Contact>
                            </Route>

                            <Route exact path="/">
                                   <Home></Home>
                            </Route>

                            <Route component={NotFound} />
                     </Switch>
              </Router>
       );
}

export default App;
