import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Home, About, Contact } from './pages';

import { Nav } from './layout';

function App() {
  return (
    <Router className='relative'>
      <Switch>
        <Route path='/about'>
          <About />
        </Route>
        <Route path='/contact'>
          <Contact />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
