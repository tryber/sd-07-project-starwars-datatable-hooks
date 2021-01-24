import React from 'react';
import PlanetsProvider from './context/PlanetsProvider';
import Table from './components/Table';
import SearchForm from './components/SearchForm';

function App() {
  return (
    <main>
      <PlanetsProvider>
        <SearchForm />
        <Table />
      </PlanetsProvider>
    </main>
  );
}

export default App;
