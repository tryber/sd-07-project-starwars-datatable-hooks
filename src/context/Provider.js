import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/API';
import StarWarsContext from './StarWarsContext';

function GetPlanets({ children }) {
  const zero = 0;
  const [response, setResponse] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maiorQue');
  const [value, setValue] = useState(zero);
  const [planetsArray, setPlanets] = useState([]);

  useEffect(() => {
    async function res() {
      const planets = await fetchPlanets();
      setResponse(planets);
      setPlanets(planets);
    }
    res();
  }, []);

  const inputFilter = (inputName) => {
    setName(inputName);
    const newArray = response.filter(({ name: planetName }) => (
      planetName.includes(inputName)
    ));
    setPlanets(newArray);
  };

  const buttonFilter = async (coluna, comp, valor) => {
    console.log(coluna, comp, valor);
    console.log(typeof valor);
    const numberValues = response.filter((planet) => (
      planet[coluna] !== 'unknown'
    ));
    if (comp === 'maiorQue') {
      const newArray = numberValues.filter((planet) => (
        parseFloat(planet[coluna]) > parseFloat(valor)
      ));
      return setPlanets(newArray);
    }
    if (comp === 'menorQue') {
      const newArray = numberValues.filter((planet) => (
        parseFloat(planet[coluna]) < parseFloat(valor)
      ));
      return setPlanets(newArray);
    }
    if (comp === 'igualA') {
      const newArray = numberValues.filter((planet) => (
        parseFloat(planet[coluna]) === parseFloat(valor)
      ));
      return setPlanets(newArray);
    }
  };

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
    inputFilter,
    buttonFilter,
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
