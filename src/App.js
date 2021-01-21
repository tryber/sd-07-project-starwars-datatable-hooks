import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import planetsAPI from './services';
import Table from './component/Table';
import './App.css';

function App() {
  const [planets, setPlanets] = useState([]);
  const [text, setText] = useState([]);
  const [filterSelect, setFilterSelect] = useState([]);
  const [proportion, setProportion] = useState([]);
  const [number, setNumber] = useState([]);

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
    filterSelect,
    proportion,
    number,
  };

  return (
    <StarWarsContext.Provider value={ context }>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setText(e.target.value) }
      />
      <select
        data-testid="column-filter"
        onChange={ (e) => setFilterSelect(e.currentTarget.value) }
      >
        <option selected="true" disabled="disabled">Choose one</option>
        <option>population</option>
        <option>orbital_period</option>
        <option>diameter</option>
        <option>rotation_period</option>
        <option>surface_water</option>
      </select>
      <select
        data-testid="comparison-filter"
        onChange={ (e) => setProportion(e.currentTarget.value) }
      >
        <option selected="true" disabled="disabled">Choose one</option>
        <option value="maior que">maior que</option>
        <option value="menor que">menor que</option>
        <option value="igual a">igual a</option>
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={() => console.log('click')}
      >
        Adicionar Filtro
      </button>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
