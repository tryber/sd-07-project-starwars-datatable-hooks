import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './components/Table';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
