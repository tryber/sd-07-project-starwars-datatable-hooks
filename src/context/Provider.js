import React from 'react';
import PropTypes from 'prop-types';
import fetchApi from '../services/fetchApi';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = React.useState();
  const [filters, setFilters] = React.useState({ filterByName: { name: '' } });

  const getFetch = async () => {
    setData(await fetchApi());
  };

  React.useEffect(() => {
    getFetch();
  }, []);

  const value = {
    data,
    filters,
    setFilters,
  };

  return (
    <StarWarsContext.Provider value={ value }>
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
