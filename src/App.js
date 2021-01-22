import React from 'react';
import './App.css';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <Provider>
      <Form />
      <Table />
    </Provider>
  );
}

export default App;
