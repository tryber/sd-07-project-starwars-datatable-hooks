import React, { useState, useEffect } from 'react';
import './App.css';
import SWContext from './context/SWContext';
import Table from './components/Table';

function App() {
  const [apiResponse, setResponse] = useState();
  const [nameFilter, setNameFilter] = useState();
  const [filters, setFilters] = useState({ filterByName: { name: '' } });
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
    console.log(nameFilter);
    setFilters({ filterByName: { name: nameFilter } });
  }, [nameFilter]);
  return (
    <div className="App">
      <SWContext.Provider value={ { apiResponse, filters } }>
        <input
          value={ nameFilter }
          onChange={ ({ target }) => setNameFilter(target.value) }
          data-testid="name-filter"
        />
        <Table />
      </SWContext.Provider>
    </div>
  );
}

export default App;
