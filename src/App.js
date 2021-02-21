import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Provider from './context/Provider';
import './App.css';
import PlanetsTable from './components/PlanetsTable';

function App() {
  return (
    <Provider>
      <PlanetsTable />
    </Provider>
  );
}

export default App;
