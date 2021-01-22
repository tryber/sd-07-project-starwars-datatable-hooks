import React from 'react';
import './App.css';
import Provider from './context/Provider';
import RequestData from './components/RequestData';
import TablePlanets from './components/TablePlanets';
import FiltersHeader from './components/FiltersHeader';

function App() {
  return (
    <Provider>
      <div>
        <FiltersHeader />
        <RequestData />
        <TablePlanets />
      </div>
    </Provider>
  );
}

export default App;
