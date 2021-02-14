import React from 'react';
import './App.css';
import ProviderStarWars from './context/StarWarsProvider';
import Table from './components/TableComponent';
import Form from './components/FormComponent';

function App() {
  return (
    <ProviderStarWars>
      <Form />
      <Table />
    </ProviderStarWars>
  );
}

export default App;
