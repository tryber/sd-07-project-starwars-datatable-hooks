import React, { useState, useEffect } from 'react';
import { PropTypes } from 'prop-types';
import Context from './Context';

const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const json = await response.json();
      setData(json.results);
    };

    getData();
  }, []);

  return (
    <Context.Provider
      value={ {
        data,
        filters: {
          filterByName: {
            name: '',
          },
          filterByNumericValues: [
            { column: 'population', comparison: 'maior que', value: 10000 },
            { column: 'orbital_period', comparison: 'maior que', value: 10000 }],
        },
      } }
    >
      {children}
    </Context.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
