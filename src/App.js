import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import planetsAPI from './services';
import Table from './component/Table';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [text, setText] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planetsSet = await planetsAPI();
      setPlanets(planetsSet);
    }
    fetchData();
  }, []);

  const context = {
    planets,
    text,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setText(e.target.value) }
      />
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
