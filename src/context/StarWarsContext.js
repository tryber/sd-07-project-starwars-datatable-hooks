import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import getPlanets from '../services/StarWarsAPI';

const Context = createContext();
const { Provider } = Context;

function StarWarsContext({ children }) {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [allFilters, setFilter] = useState({
    filters: {
      filtersByName: '',
    },
  });
  // const [filteredData, setNameFilter] = useNameFilter();
  // const [isScanning, setScanning] = useState(true);
  // const [planets, setPlanets] = useState([]);

  // const handleSuccess = (json) => {
  //   console.log(json.results);
  //   const planets = [...json.results];
  //   setData([...planets]);
  // };

  // const handleError = (json) => {
  //   console.log(json);
  // };

  const fetchPlanets = async () => {
    setData(await getPlanets());
  };

  useEffect(() => {
    fetchPlanets();
  }, []);

  const handleNameFilterChange = (value) => {
    setFilter({
      filters: {
        filtersByName: value,
      },
    });
    // setNameFilter(value);
  };

  const updateData = (newData) => {
    console.log('chamnou');
    setFilteredData(newData);
  };

  useEffect(() => {
    const { filters } = allFilters;
    const { filtersByName } = filters;
    if (filtersByName !== '') {
      console.log('aqui');
      const dataFiltered = data.filter(
        (value) => value.name.includes(filtersByName) === true,
      );
      console.log(dataFiltered);
      updateData(dataFiltered);
    } else {
      console.log('vazio');
      updateData([]);
    }
  }, [allFilters, data]);

  const context = {
    data,
    fetchPlanets,
    allFilters,
    handleNameFilterChange,
    filteredData,
    // handleNameChange: setNameFilter,
  };
  return (
    <Provider value={ context }>
      {children}
    </Provider>
  );
}

StarWarsContext.propTypes = {
  children: PropTypes.node.isRequired,
};

export { StarWarsContext as Provider, Context };
