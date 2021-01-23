import React, { useState, useReducer } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import reducer from './reducer';

function Provider({ children }) {
  const dataInitialState = [];
  const filterInitialState = {
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: '100000',
      },
    ],
  };
  const customFilterInitialState = false;

  const [data, setData] = useState(dataInitialState);
  // const [filters, setFilter] = useState(filterInitialState);
  const [filters, dispatch] = useReducer(reducer, filterInitialState);
  const [customFilter, setCustomFilter] = useState(customFilterInitialState);

  const contextValue = {
    data,
    setData,
    filters,
    // setFilter,
    dispatch,
    customFilter,
    setCustomFilter,
  };

  return (
    <StarWarsContext.Provider value={ contextValue }>
      {children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
