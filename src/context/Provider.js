import React, { useState } from 'react';
import PropTypes from 'prop-types';
import API from '../service/API';
import Context from './Context';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [Value, setValue] = useState([]);
  const [search, setSearch] = useState(
    {
      filters:
      {
        filterName:
        {
          name: '',
        },
        filterValues: [],
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
          search,
          setSearch,
          Value,
          setValue }
      }
    >
      { children}
    </Context.Provider>
  );
}

Provider.propTypes = PropTypes.arrayOf(PropTypes.string).isRequired;

export default Provider;
