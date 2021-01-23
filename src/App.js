import React from 'react';
import './App.css';
import StartWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <div className="App">
      <StartWarsProvider>
        <Table />
      </StartWarsProvider>
    </div>
  );
}

export default App;
