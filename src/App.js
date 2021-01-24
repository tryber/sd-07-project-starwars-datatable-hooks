import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import planetsAPI from './services';
import Table from './component/Table';
import './App.css';

const proportionGreaterThan = 'maior que';
const proportionLessThan = 'menor que';
const proportionIsEqualTo = 'igual a';
const proportionValues = [proportionGreaterThan, proportionLessThan, proportionIsEqualTo];
const filterByValues = [
  'population',
  'orbital_period',
  'diameter',
  'rotation_period',
  'surface_water',
];

function App() {
  const [planets, setPlanets] = useState([]);
  const [text, setText] = useState([]);
  const [filterSelect, setFilterSelect] = useState([]);
  const [proportion, setProportion] = useState([]);
  const [number, setNumber] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planetsSet = await planetsAPI();
      setPlanets(planetsSet);
    }
    fetchData();
  }, []);

  function proportionCalculate(item, filter) {
    const value = parseInt(filter.number, 10);
    if (filter.proportion === proportionGreaterThan) {
      return item[filter.filterSelect] > value;
    }
    if (filter.proportion === proportionLessThan) {
      return item[filter.filterSelect] < value;
    }
    return item[filter.filterSelect] === filter.number;
  }

  useEffect(() => {
    let filtered = Array.from(planets);
    filters.forEach((filter) => {
      filtered = filtered.filter((item) => proportionCalculate(item, filter));
    });
    // planets.filter((item) => filters.every((f) => proportionCalculate(item, filter)));
    setFilteredPlanets(filtered.filter((item) => item.name.includes(text)));
  }, [filters, planets, text]);

  function addFilter() {
    setFilters(filters.concat([{
      filterSelect,
      proportion,
      number,
    }]));
  }

  function deleteFilter(comparison) {
    const deletedFilter = filters.filter((item) => item.filterSelect !== comparison);
    setFilters(deletedFilter);
  }
  function getUniqueFilterByValues() {
    return filterByValues
      .filter((value) => !filters.find((f) => f.filterSelect === value));
  }

  const context = {
    planets,
    text,
    filterSelect,
    proportion,
    number,
    filteredPlanets,
  };

  function renderFilters() {
    return (
      filters.map((item) => (
        <div data-testid="filter" key={ item.filterSelect }>
          {`${item.filterSelect} - ${item.proportion} - ${item.number} - `}
          <button
            type="button"
            onClick={ () => deleteFilter(item.filterSelect) }
          >
            X
          </button>
        </div>))
    );
  }

  return (
    <StarWarsContext.Provider value={ context }>
      <input
        type="text"
        data-testid="name-filter"
        onChange={ (e) => setText(e.target.value) }
      />
      <select
        defaultValue="default"
        data-testid="column-filter"
        onChange={ (e) => setFilterSelect(e.currentTarget.value) }
      >
        <option disabled value="default">Choose one</option>
        {getUniqueFilterByValues()
          .map((item) => <option key={ item } value={ item }>{ item }</option>)}
      </select>
      <select
        defaultValue="default"
        data-testid="comparison-filter"
        onChange={ (e) => setProportion(e.currentTarget.value) }
      >
        <option disabled value="default">Choose one</option>
        {proportionValues
          .map((item) => <option key={ item } value={ item }>{ item }</option>)}
      </select>
      <input
        type="number"
        data-testid="value-filter"
        onChange={ (e) => setNumber(e.target.value) }
      />
      <button
        type="button"
        data-testid="button-filter"
        onClick={ () => addFilter() }
      >
        Adicionar Filtro
      </button>
      <div>
        {renderFilters()}
      </div>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
