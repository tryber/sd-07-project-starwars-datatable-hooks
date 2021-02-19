import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/API';
import StarWarsContext from './StarWarsContext';

function GetPlanets({ children }) {
  const zero = 0;
  const [response, setResponse] = useState([]);
  const [name, setName] = useState('');
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState(zero);
  const [planetsArray, setPlanets] = useState([]);
  const [filters, setFilters] = useState({
    filterByName: {},
    filterByNumericValues: [],
  });

  useEffect(() => {
    async function res() {
      const planets = await fetchPlanets();
      setResponse([...planets]);
      setPlanets([...planets]);
    }
    res();
  }, []);

  useEffect(() => {
    const { filterByName, filterByNumericValues } = filters;
    console.log(filterByName.name);
    let newArray = [...response];
    if (filterByName !== []) {
      console.log('name');
      const { name: nome } = filterByName;
      newArray = newArray.filter(({ name: planetName }) => (
        planetName.includes(nome)
      ));
    }

    if (filterByNumericValues.length !== zero) {
      filterByNumericValues.forEach((element) => {
        const { column: coluna, comparison: comp, value: valor } = element;
        if (comp === 'maior que') {
          console.log('maior que');
          newArray = newArray.filter((planet) => (
            parseFloat(planet[coluna]) > parseFloat(valor)
          ));
        }
        if (comp === 'menor que') {
          console.log('menor que');
          newArray = newArray.filter((planet) => (
            parseFloat(planet[coluna]) < parseFloat(valor)
          ));
        }
        if (comp === 'igual a') {
          console.log('igual a');
          newArray = newArray.filter((planet) => (
            parseFloat(planet[coluna]) === parseFloat(valor)
          ));
        }
      });
    }
    console.log(newArray);
    setPlanets(newArray);
  }, [filters]);

  const inputFilter = (inputName) => {
    setFilters({
      ...filters,
      filterByName: { name: inputName },
    });
  };

  const buttonFilter = () => {
    const newNumericFilter = {
      column,
      comparison,
      value,
    };
    setFilters({
      ...filters,
      filterByNumericValues: [
        ...filters.filterByNumericValues,
        newNumericFilter,
      ],
    });
  };

  const state = {
    response,
    planetsArray,
    filters,
    column,
    comparison,
    value,
    name,
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
