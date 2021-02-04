// Referencias bibliograficas:
// Para o desenvolvimento deste projeto usei como referencia as seguintes fontes:
// Repositorio do colega Carlos Souza: https://github.com/tryber/sd-07-project-starwars-datatable-hooks/tree/carlos-souza-react-context-hooks-starwars-datatable-filters;
// Repositorio do colega Tiago Esdras:https://github.com/tryber/sd-07-project-starwars-datatable-hooks/tree/tiago-esdras-starwars-datatable.
// StackOverFlow
// Fontes diversas do Google.

import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Filters from './components/Filters';
import './App.css';

function App() {
  return (
    <Provider>
      <Filters />
      <Table />
    </Provider>
  );
}

export default App;
