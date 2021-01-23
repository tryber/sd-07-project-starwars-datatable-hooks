import React, { useState, useEffect } from 'react';
import StarWarsContext from './context/StarWarsContext';
import TablePlanet from './components/Table';
import FilterByName from './components/FilterByName';

function App() {
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const [starWars, setStarWars] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '' },
  });

  const initialState = {
    starWars,
    setStarWars,
    filters,
    setFilters,
  };

  useEffect(() => {
    async function data() {
      const { results } = await fetch(url)
        .then((response) => response.json());
      setStarWars(results);
      console.log(results);
    }
    data();
  }, [url]);

  return (
    <div>
      <StarWarsContext.Provider value={ initialState }>
        <FilterByName />
        <TablePlanet />
      </StarWarsContext.Provider>
    </div>
  );
}

export default App;
