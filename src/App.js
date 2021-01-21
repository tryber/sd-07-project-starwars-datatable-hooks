import React from 'react';
import Provider from './Context/Provider';
import './App.css';
import Table from './components/Table';

function App() {
  return (
    <Provider>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
