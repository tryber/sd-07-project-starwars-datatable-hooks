import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import planetsAPI from './services';
import Table from './component/Table';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planetsSet = await planetsAPI();
      setPlanets(planetsSet);
    }
    fetchData();
  }, []);

  const context = {
    planets,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
