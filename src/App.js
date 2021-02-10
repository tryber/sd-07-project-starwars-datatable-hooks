import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import Provider from './context/Provider';
import Planets from './pages/Planets';
import './App.css';

function App() {
  return (
    <Provider>
      <Planets />
    </Provider>
    // <Provider>
    //   <Switch>
    //     <Route exact path="/" component={ Planets } />
    //   </Switch>
    // </Provider>
  );
}

export default App;
