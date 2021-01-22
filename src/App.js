import React, { useState, useEffect } from 'react';
import './App.css';
import SWContext from './context/SWContext';
import Table from './components/Table';
import NumericFilter from './components/NumericFilter';

function App() {
  const [apiResponse, setResponse] = useState();
  const [nameFilter, setNameFilter] = useState();
  const [numericFilter, setNumericFilter] = useState();
  const [columnSelected, setColumnSelected] = useState();
  const [orientationSelected, setOrientationSelected] = useState();
  const [sort, setSort] = useState();
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
      order: {
        column: '',
        sort: 'ASC',
      },
    },
  );
  const clickSort = () => {
    console.log('clicksort');
    setSort({ column: columnSelected, sort: orientationSelected });
    console.log(sort);
  };
  const columnOptions = [
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water',
  ];
  useEffect(() => {
    if (apiResponse === undefined) {
      const fetchFromApi = async () => {
        try {
          const data = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
            .then((response) => response.json());
          setResponse(data.results);
        } catch (error) {
          console.log(error);
        }
      };
      fetchFromApi();
    }
  });
  useEffect(() => {
    if (filters.filterByNumericValues.length < 1 && numericFilter !== undefined) {
      setFilters({
        order: sort,
        filterByName: { name: nameFilter },
        filterByNumericValues: [numericFilter],
      });
    } else if (!(filters.filterByNumericValues[filters.filterByNumericValues.length - 1]
      === numericFilter) && numericFilter !== undefined) {
      setFilters({
        order: sort,
        filterByName: { name: nameFilter },
        filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
      });
    } else if (nameFilter !== filters.filterByName.name) {
      setFilters({
        order: sort,
        filterByName: { name: nameFilter },
        filterByNumericValues: [],
      });
    } else if (filters.order !== sort) {
      setFilters({
        ...filters,
        order: sort,
      });
    }
  }, [nameFilter, numericFilter, filters, sort]);
  return (
    <div className="App">
      <SWContext.Provider
        value={ { apiResponse, numericFilter, setNumericFilter, filters } }
      >
        <input
          value={ nameFilter }
          onChange={ ({ target }) => setNameFilter(target.value) }
          data-testid="name-filter"
        />
        {filters.filterByNumericValues.map((filt, index) => (
          <div data-testid="filter" key={ index }>
            <p>{`${filt.column} filter`}</p>
            <button
              type="button"
              onClick={ () => {
                setNumericFilter();
                setFilters({
                  filterByName: { name: nameFilter },
                  filterByNumericValues: [
                    ...filters.filterByNumericValues.filter((val) => !(val.column
                    === filt.column))] });
              } }
            >
              x
            </button>
          </div>))}
        <select
          data-testid="column-sort"
          onChange={ ({ target }) => setColumnSelected(target.value) }
        >
          {
            columnOptions.map((option, index) => <option key={ index }>{option}</option>)
          }
        </select>
        <input
          type="radio"
          name="sort"
          onChange={ ({ target }) => setOrientationSelected(target.value) }
          value="ASC"
          data-testid="column-sort-input-asc"
        />
        <input
          type="radio"
          name="sort"
          onChange={ ({ target }) => setOrientationSelected(target.value) }
          value="DESC"
          data-testid="column-sort-input-desc"
        />
        <button
          data-testid="column-sort-button"
          onClick={ () => clickSort() }
          type="button"
        >
          sort
        </button>
        <NumericFilter columnOptions={ columnOptions } />
        <Table />
      </SWContext.Provider>
    </div>
  );
}

export default App;
