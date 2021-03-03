import React from 'react';
import Provider from './context/Provider';
import Table from './components/Table';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <Provider>
      <Header />
      <SearchBar />
      <Table />
    </Provider>
  );
}

export default App;
