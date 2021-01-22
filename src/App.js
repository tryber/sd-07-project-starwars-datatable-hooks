import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Provider from './context/Provider';
import Planets from './pages/Planets';
import './css/App.css';

function App() {
  return (
    <Provider className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={ Planets } />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
