import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import RequestApi from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filters, setFilter] = useState();

  function filterByName({ target: { value } }) {
    const name = data.filter((item) => item.name
      .toLowerCase()
      .includes(value.toLowerCase()));
    if (data.includes(name)) return name;
    setFilter({ ...filters, filterByName: { name } });
  }

  useEffect(() => {
    async function callApi() {
      const { results } = await RequestApi();
      setData(results);
    }
    callApi();
  }, []);

  const context = {
    data,
    filters,
    setData,
    filterByName,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.shape(PropTypes.object).isRequired,
};

export default StarWarsProvider;
