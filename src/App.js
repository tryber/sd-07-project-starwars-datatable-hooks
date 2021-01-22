import React, { useState, useEffect } from 'react';
import './App.css';
import SWContext from './context/SWContext';
import Table from './components/Table';
import NumericFilter from './components/NumericFilter';

function App() {
  const [apiResponse, setResponse] = useState();
  const [nameFilter, setNameFilter] = useState();
  const [numericFilter, setNumericFilter] = useState();
  const [filters, setFilters] = useState(
    {
      filterByName: { name: '' },
      filterByNumericValues: [],
    },
  );
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
        filterByName: { name: nameFilter },
        filterByNumericValues: [numericFilter],
      });
    } else if (!(filters.filterByNumericValues[filters.filterByNumericValues.length - 1]
      === numericFilter) && numericFilter !== undefined) {
      setFilters({
        filterByName: { name: nameFilter },
        filterByNumericValues: [...filters.filterByNumericValues, numericFilter],
      });
    } else if (nameFilter !== filters.filterByName.name) {
      setFilters({
        filterByName: { name: nameFilter },
        filterByNumericValues: [],
      });
    }
  }, [nameFilter, numericFilter, filters]);
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
        <NumericFilter />
        <Table />
      </SWContext.Provider>
    </div>
  );
}

export default App;
