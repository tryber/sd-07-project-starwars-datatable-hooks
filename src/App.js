import React, { useEffect, useState } from 'react';
import './App.css';
import Table from './components/Table';
import MyContext from './context/MyContext';
import getPlanets from './services/Api';

function App() {
  const [state, setData] = useState({});

  useEffect(() => {
    getPlanets()
      .then((response) => setData(response));
  });

  return (
    <MyContext.Provider value={ state }>
      <div className="App">
        <Table />
      </div>
    </MyContext.Provider>
  );
}

export default App;
