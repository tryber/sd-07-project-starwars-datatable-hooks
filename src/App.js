import React from 'react';
import './App.css';
import Provider from './context/Provider';
import Table from './component/Table';

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
