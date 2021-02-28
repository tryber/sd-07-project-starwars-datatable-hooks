import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import fetchAPI from '../services/fetchAPI';

function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [filters, setFilters] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [{
      column: 'population',
      comparison: '>',
      value: 0,
    }],
  });

  useEffect(() => {
    fetchAPI().then((r) => setData(r));
  }, [filters]);

  return (
    <StarWarsContext.Provider value={ { data, filters, setFilters } }>
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default StarWarsProvider;
