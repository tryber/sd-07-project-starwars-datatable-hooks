import React from 'react';
import Provider from './Provider';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
