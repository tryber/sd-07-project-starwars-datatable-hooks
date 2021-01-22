import React from 'react';
import { Provider } from './components/Context';
import { Table } from './components';
import './App.css';

function App() {
  return (
    <Provider>
      <main className="App">
        <Table />
      </main>
    </Provider>
  );
}

export default App;
