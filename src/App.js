import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import StarWarsContext from './context/StarWarsContext';
// Fontes:
// https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/129
// https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/51
function App() {
  return (
    <StarWarsContext>
      <Header />
      <Table />
    </StarWarsContext>

  );
}

export default App;
