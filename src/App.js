import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from './context/StarWarsProvider';

import './App.css';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Table } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
