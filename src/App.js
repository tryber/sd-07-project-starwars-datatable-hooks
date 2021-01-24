import React from 'react';
import Provider from './context/Provider';
import './App.css';
import { Header, Filters, Table } from './components';

function App() {
  return (
    <div className="App">
      <Provider>
        <Header />
        <Filters />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
