import React from 'react';
import Table from './components/Table';
import './App.css';
import Provider from './Provider';
import FormHeader from './components/FormHeader';

function App() {
  return (
    <Provider>
      <FormHeader />
      <Table />
    </Provider>
  );
}

export default App;
