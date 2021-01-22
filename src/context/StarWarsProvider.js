import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import fetchPlanets from '../services/api';
import StarWarsContext from './StarWarsContext';

function Provider({ children }) {
  const [data, setData] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [name, setName] = useState('');
  const [nameFiltered, setNameFiltered] = useState([]);
  const [column, setColumn] = useState('population');
  const [comparison, setComparison] = useState('maior que');
  const [value, setValue] = useState();
  const [numberFiltered, setNumberFiltered] = useState([]);
  const [optionsOfColumn, setOptionsOfColumn] = useState([
    'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);

  const getPlanets = async () => {
    setData(await fetchPlanets());
    setIsFetching(false);
  };

  useEffect(() => {
    getPlanets();
  }, []);

  useEffect(() => {
    setNameFiltered(
      data.filter((planet) => planet.name.toLowerCase().includes(name.toLowerCase())),
    );
  }, [name, data]);

  const filterByValue = () => {
    setNameFiltered([]);
    if (comparison === 'maior que') {
      setNumberFiltered(
        data.filter((planet) => Number(planet[column]) > value),
      );
    } else if (comparison === 'menor que') {
      setNumberFiltered(
        data.filter((planet) => Number(planet[column]) < value),
      );
    } else {
      setNumberFiltered(
        data.filter((planet) => Number(planet[column]) === Number(value)),
      );
    }
    setOptionsOfColumn(optionsOfColumn.filter((item) => item !== column));
  };

  const resetFilter = () => {
    setOptionsOfColumn([
      'population', 'orbital_period', 'diameter', 'rotation_period', 'surface_water']);
    setValue('');
    setComparison('');
    setNumberFiltered(data);
  };

  return (
    <StarWarsContext.Provider
      value={
        {
          data,
          isFetching,
          setName,
          nameFiltered,
          optionsOfColumn,
          filters:
          {
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
          setColumn,
          setComparison,
          setValue,
          numberFiltered,
          filterByValue,
          resetFilter }
      }
    >
      { children }
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
