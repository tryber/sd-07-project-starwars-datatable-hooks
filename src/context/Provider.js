import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/API';
import StarWarsContext from './StarWarsContext';

function GetPlanets({ children }) {
  const [response, setResponse] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('');
  const [comparison, setComparison] = useState('');
  const [value, setValue] = useState('');
  const [planetsArray, setPlanets] = useState([]);

  useEffect(() => {
    async function res() {
      const planets = await fetchPlanets();
      setResponse(planets);
    }
    setPlanets(response);
    res();
  }, [response]);

  const state = {
    response,
    planetsArray,
    filters: {
      filterByName: {
        name,
      },
      filterByNumericValues: [
        {
          column,
          comparison,
          value,
        },
      ],
    },
    setPlanets,
    setName,
    setResponse,
    setColumn,
    setComparison,
    setValue,
  };

  return (
    <StarWarsContext.Provider value={ state }>
      {children}
    </StarWarsContext.Provider>
  );
}

GetPlanets.propTypes = {
  children: PropTypes.node.isRequired,
};

export default GetPlanets;
