import React from 'react';
import './App.css';
import Provider from './context/Provider';
import RequestData from './components/RequestData';
import TablePlanets from './components/TablePlanets';
import FiltersHeader from './components/FiltersHeader';
import FiltersList from './components/FiltersLista';
import OrderColumn from './components/OrderColum';

function App() {
  return (
    <Provider>
      <div>
        <FiltersHeader />
        <RequestData />
        <FiltersList />
        <OrderColumn />
        <TablePlanets />
      </div>
    </Provider>
  );
}

export default App;
