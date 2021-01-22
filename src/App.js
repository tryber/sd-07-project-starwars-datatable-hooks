import React, { useEffect, useState } from 'react';
import Table from './components/table';
import Searcher from './components/searcher';
import StarWarsContext from './context/StarWarsContext';
import starWarsAPI from './services/starWarsAPI';

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const initialValue = 0;
  const [value, setValue] = useState(initialValue);
  const [useFilter, setUseFilter] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: '',
        comparison: '',
        value: '',
      },
    ],
  });

  useEffect(() => {
    async function getPlanets() {
      setData(await starWarsAPI());
    }
    getPlanets();
  }, []);

  const handleFilter = (field, info) => {
    if (field === 'filterByName') {
      setFilters({
        ...filters, [field]: { name: info },
      });
    } else {
      setFilters({
        ...filters, [field[0]]: { column, comparison, value },
      });
      setUseFilter(true);
    }
  };

  const context = {
    data,
    filters,
    column,
    comparison,
    value,
    filterData,
    useFilter,
    setUseFilter,
    setFilterData,
    setColumn,
    setComparison,
    setValue,
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
