import React from 'react';
import Provider from './context/Provider';
import TableData from './components/TableData';
import './App.css';

function App() {
  return (
    <Provider>
      <div className="App">
        Star Wars Project
        <TableData />
      </div>
    </Provider>
  );
}

export default App;
