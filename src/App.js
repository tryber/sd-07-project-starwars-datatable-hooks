import React from 'react';
import { Provider } from './components/Context';
import { Table } from './components';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider>
      <main className="App">
        <SearchBar />
        <Table />
      </main>
    </Provider>
  );
}

export default App;
