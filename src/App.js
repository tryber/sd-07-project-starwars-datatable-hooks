import React, { useEffect, useState } from 'react';
import Table from './components/table';
import Searcher from './components/searcher';
import Filters from './components/filters';
import Sort from './components/sort';
import StarWarsContext from './context/StarWarsContext';
import starWarsAPI from './services/starWarsAPI';

function App() {
  const [data, setData] = useState([]);
  const [filterData, setFilterData] = useState([]);
  const [sortedData, setSortedData] = useState([]);
  const [useSortedData, setUseSortedData] = useState(false);
  const [selectColumn, setSelectColumn] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const initialValue = 0;
  const [value, setValue] = useState(initialValue);
  const [useFilter, setUseFilter] = useState(false);
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [],
    order: {
      column: 'name',
      sort: 'ASC',
    },
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
      setFilters((currentFilter) => ({
        ...currentFilter,
        [field]: [...currentFilter[field],
          { column, comparison, value }],
      }));
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
    selectColumn,
    sortedData,
    useSortedData,
    setUseSortedData,
    setSortedData,
    setSelectColumn,
    setUseFilter,
    setFilterData,
    setColumn,
    setComparison,
    setValue,
    handleFilter,
    setFilters,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      <Searcher />
      <Filters />
      <Sort />
      <Table />
    </StarWarsContext.Provider>
  );
}

export default App;
