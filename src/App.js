import React from 'react';
import './App.css';
import { Provider } from './context/StarWarsContext';
import Table from './components/Table';
import Form from './components/Form';

function App() {
  return (
    <div className="App-header">
      <Provider>
        <h1 class="text-center">StarWars Planets!</h1>
        <Form />
        <Table />
      </Provider>
    </div>
  );
}

export default App;
