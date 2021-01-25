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
const nameHeaderColum = [
  'name', 'rotation_period', 'orbital_period', 'diameter', 'climate', 'gravity',
  'terrain', 'surface_water', 'population', 'created', 'edited', 'films', 'url'];

function App() {
  const [planets, setPlanets] = useState([]);
  const [text, setText] = useState([]);
  const [filterSelect, setFilterSelect] = useState([]);
  const [proportion, setProportion] = useState([]);
  const [number, setNumber] = useState([]);
  const [filteredPlanets, setFilteredPlanets] = useState([]);
  const [filters, setFilters] = useState([]);
  const [sort, setSort] = useState([]);
  const [column, setColumn] = useState([]);
  const [sortedPlanets, setSortedPlanets] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const planetsSet = await planetsAPI();
      const zero = 0;
      const lessOne = -1;
      planetsSet.sort((a, b) => {
        if (a.name > b.name) {
          return 1;
        }
        if (a.name < b.name) {
          return lessOne;
        }
        return zero;
      });
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
    setFilteredPlanets(filtered.filter((item) => item.name.includes(text)));
  }, [filters, planets, text, sortedPlanets]);

  function addFilter() {
    setFilters(filters.concat([{
      filterSelect,
      proportion,
      number,
      order: {
        column,
        sort,
      },
    }]));
  }

  function sortValues() {
    if (sort === 'ASC') {
      const sorted = planets.sort((item1, item2) => item1[column] - item2[column]);
      setSortedPlanets(sorted);
    } else {
      const sorted = planets.sort((item1, item2) => item2[column] - item1[column]);
      setSortedPlanets(sorted);
    }
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
      <div>
        <select
          defaultValue="default"
          data-testid="column-filter"
          onChange={ (e) => setFilterSelect(e.currentTarget.value) }
        >
          {/* <option disabled value="default">Choose one</option> */}
          {getUniqueFilterByValues()
            .map((item) => <option key={ item } value={ item }>{ item }</option>)}
        </select>
        <select
          defaultValue="default"
          data-testid="comparison-filter"
          onChange={ (e) => setProportion(e.currentTarget.value) }
        >
          {/* <option disabled value="default">Choose one</option> */}
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
      </div>
      <div>
        <select
          data-testid="column-sort"
          onChange={ (e) => setColumn(e.target.value) }
        >
          {nameHeaderColum
            .map((item) => <option value={ item } key={ item }>{item}</option>)}
        </select>
        <label htmlFor="asc">
          ASC
          <input
            type="radio"
            data-testid="column-sort-input-asc"
            id="asc"
            name="orderBy"
            value="ASC"
            onClick={ () => setSort('ASC') }
          />
        </label>
        <label htmlFor="desc">
          DESC
          <input
            type="radio"
            data-testid="column-sort-input-desc"
            id="desc"
            name="orderBy"
            value="DESC"
            onClick={ () => setSort('DESC') }
          />
        </label>
        <button
          data-testid="column-sort-button"
          type="button"
          onClick={ () => sortValues() }
        >
          Order
        </button>
      </div>
      <div>
        {renderFilters()}
      </div>
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
