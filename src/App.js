import React from 'react';
import './App.css';
import Provider from './context/Provider';
import RequestData from './components/RequestData';
import TablePlanets from './components/TablePlanets';

function App() {
  return (
    <Provider>
      <div>
        <RequestData />
        <TablePlanets />
      </div>
    </Provider>
  );
}

export default App;
