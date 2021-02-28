import React, { useState } from 'react';
import PropTypes from 'prop-types';
import API from '../service/API';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [byValue, setByValue] = useState([]);
  const [searchTerm, setSearchTerm] = useState(
    {
      filters:
      {
        filterByName:
        {
          name: '',
        },
        filterByNumericValues: [],
        order: {
          column: 'name',
          sort: 'ASC',
        },
      },
    },
  );

  const dataApi = async () => {
    const dataResponse = await API();
    setData(dataResponse);
  };

  return (
    <Context.Provider
      value={
        { data,
          dataApi,
          searchTerm,
          setSearchTerm,
          byValue,
          setByValue }
      }
    >
      { children}
    </Context.Provider>
  );
}

Provider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default Provider;
