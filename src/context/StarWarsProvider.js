import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import RequestAPI from '../services/RequestApi';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState();
  const [filters, setFilter] = useState();
  const [novo, setNovo] = useState();

  function filterByName({ target: { value } }) {
    const name = data.filter((item) => item.name.includes(value));
    setFilter({ filterByName: { name } });
  }

  useEffect(() => {
    async function callApi() {
      const { results } = await RequestAPI();
      setData(results);
    }
    callApi();
  }, []);

  useEffect(() => {
    if (filters) setNovo(filters.filterByName.name);
    else setNovo(data);
  }, [data, filters]);

  const context = { data, filterByName, novo };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

StarWarsProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
export default StarWarsProvider;
