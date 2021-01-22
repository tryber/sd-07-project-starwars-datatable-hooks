import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Provider } from './components/APIRequest'
import Table from './components/Table'

function App() {
  return (
    <div>
      <Provider>
        <Table />
      </Provider>
    </div>
  );
}

export default App;
