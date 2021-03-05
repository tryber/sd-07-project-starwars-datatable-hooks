import React from 'react';
import Header from './components/Header';
import Table from './components/Table';
import Provider from './context/Provider';

// Fontes:
// https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/129
// https://github.com/tryber/sd-07-project-starwars-datatable-hooks/pull/51
function App() {
  return (
    <Provider>
      <Header />
      <Table />
    </Provider>

  );
}

export default App;
