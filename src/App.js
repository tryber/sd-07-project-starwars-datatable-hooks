import React from 'react';

import Table from './components/Table';
import Provider from './context/Provider';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        <Table />
      </div>
    </Provider>
  );
}

export default App;
