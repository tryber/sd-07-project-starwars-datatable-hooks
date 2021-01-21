import React from 'react';
import Provider from './Provider';
import Table from './components/Table';
import Filter from './components/Filter';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Filter />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
