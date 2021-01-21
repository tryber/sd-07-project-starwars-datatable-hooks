import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const [data, setPlanetsList] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilter] = useState({ filterByName: { name: '' } });

  const fetchPlanets = async () => {
    setPlanetsList(await planetsAPI());
    setIsFetching(false);
  };

  const handlerFilterByName = (value) => {
    setFilteredData([
      ...data.filter((planet) => planet.name.includes(value)),
    ]);
  };

  const handlerChange = ({ target }) => {
    const { value } = target;
    setFilter({
      ...filters,
      filterByName: {
        name: value,
      },
    });
    handlerFilterByName(value);
  };

  const context = {
    filteredData,
    data,
    isFetching,
    filters,
    handlerChange,
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      { children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
