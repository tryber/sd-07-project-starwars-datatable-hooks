import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './component/Table';
import Filter from './component/Filter';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <Filter />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
