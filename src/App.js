import React from 'react';
import './App.css';
import FilterName from './component/FilterName';
import Provider from './context/Provider';
import Table from './component/Table';

function App() {
  return (
    <Provider>
      <div className="App">
        <FilterName />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
