import React, { useEffect, useState } from 'react';
import Table from './components/table';
import Searcher from './components/searcher';
import StarWarsContext from './context/StarWarsContext';
import starWarsAPI from './services/starWarsAPI';

function App() {
  const [data, setData] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
  });

  useEffect(() => {
    async function getPlanets() {
      setData(await starWarsAPI());
    }
    getPlanets();
  }, []);

  const handleFilter = (field, value) => {
    setFilters({
      ...filters, [field]: { name: value },
    });
  };

  const context = {
    data,
    filters,
    handleFilter,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      <Searcher />
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
