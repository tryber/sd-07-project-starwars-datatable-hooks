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
  };

  return (
    <StarWarsContext.Provider
      value={
        {
          data,
          isFetching,
          setName,
          nameFiltered,
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
          filterByValue }
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
