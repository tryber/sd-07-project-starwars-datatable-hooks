import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const [data, setPlanetsList] = useState([]);
  const [filteredData, setFilteredData] = useState();
  const [isFetching, setIsFetching] = useState(true);
  const [filters, setFilter] = useState({
    filterByName: {
      name: '',
    },
    filterByNumericValues: [
      {
        column: 'population',
        comparison: 'maior que',
        value: 0,
      },
    ],
  });

  const fetchPlanets = async () => {
    setPlanetsList(await planetsAPI());
    setIsFetching(false);
  };

  const handlerFilterByName = (name, value) => {
    setFilter({
      ...filters,
      filterByName: {
        [name]: value,
      },
    });
    setFilteredData([
      ...data.filter((planet) => planet.name.toLowerCase().includes(value)),
    ]);
  };

  const handlerFilterByNumericValues = (name, value) => {
    setFilter({
      ...filters,
      filterByNumericValues: [
        {
          ...filters.filterByNumericValues[0],
          [name]: value,
        },
      ],
    });
  };

  const handlerClick = () => {
    const { filterByNumericValues } = filters;
    const [array] = filterByNumericValues;
    const { column, comparison, value } = array;
    switch (comparison) {
    case 'maior que':
      setFilteredData([
        ...data.filter((planet) => (
          parseFloat(planet[column]) > value || planet[column] === 'unknown')),
      ]);
      break;
    case 'menor que':
      setFilteredData([
        ...data.filter(
          (planet) => (planet[column] < value || planet[column] === 'unknown'),
        ),
      ]);
      break;
    case 'igual a':
      setFilteredData([
        ...data.filter((planet) => planet[column] === value),
      ]);
      break;
    default:
      break;
    }

    // setFilteredData([
    //   ...data.filter((planet) => {

    //     planet[column]
    //   }),
    // ]);
  };

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      handlerFilterByName(name, value);
    } else {
      handlerFilterByNumericValues(name, value);
    }
  };

  const context = {
    filteredData,
    data,
    isFetching,
    filters,
    handlerChange,
    handlerClick,
  };

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <StarWarsContext.Provider value={ context }>
      { children}
    </StarWarsContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.instanceOf(Object).isRequired,
};

export default Provider;
