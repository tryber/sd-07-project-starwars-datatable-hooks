import React from 'react';
import Table from './components/Table';
import StarWarsProvider from './context/StarWarsProvider';
import './App.css';

function App() {
  return (
    <div className="App">
      <StarWarsProvider>
        <Table />
      </StarWarsProvider>
    </div>
  );
}

export default App;
