import React from 'react';
import Provider from './context/Provider';
import Header from './components/Header';
import Table from './components/table';

function App() {
  return (
    <Provider>
      <div>
        <Header />
        <Table />
      </div>
    </Provider>
  );
}

export default App;
