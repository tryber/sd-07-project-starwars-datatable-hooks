import React from 'react';
import './App.css';
import StarWarsProvider from './context/StarWarsProvider';
import Table from './component/Table';
import FilterByName from './component/FilterByName';
import FilterByNumber from './component/FilterByNumber';

function App() {
  return (
    <main>
      <StarWarsProvider>
        <FilterByName />
        <FilterByNumber />
        <Table />
      </StarWarsProvider>
    </main>
  );
}

export default App;
