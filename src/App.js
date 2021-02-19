import React from 'react';
import MyContext from './components/MyContext';
import Table from './components/Table';
import './App.css';

function App() {
  return (
    <div className="App">
      <MyContext.Provider>
        <Table />
      </MyContext.Provider>
    </div>
  );
}

export default App;
