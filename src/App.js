import React from 'react';
import './App.css';
import Provider from './context/Provider';
import RequestData from './components/RequestData';
import TablePlanets from './components/TablePlanets';
import FiltersHeader from './components/FiltersHeader';
import FiltersList from './components/FiltersLista';

function App() {
  return (
    <Provider>
      <div>
        <FiltersHeader />
        <RequestData />
        <FiltersList />
        <TablePlanets />
      </div>
    </Provider>
  );
}

export default App;
