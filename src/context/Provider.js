import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import planetsAPI from '../services/planetsAPI';

function Provider({ children }) {
  const zero = 0;
  const [data, setPlanetsList] = useState([]);
  const [columns, setColumns] = useState([
    'population',
    'orbital_period',
    'diameter',
    'rotation_period',
    'surface_water',
  ]);
  const [index, setIndex] = useState(zero);
  const [currFilter, setCurrFilter] = useState({
    column: 'population',
    comparison: 'maior que',
    value: 0,
  });
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

  const handlerFilterByNumericValues = ({ column, comparison, value }) => {
    if (index === zero) {
      setFilter({
        ...filters,
        filterByNumericValues: [
          {
            column,
            comparison,
            value,
          },
        ],
      });
      setIndex((prevIndex) => prevIndex + 1);
    } else {
      setFilter({
        ...filters,
        filterByNumericValues: [
          ...filters.filterByNumericValues,
          {
            column,
            comparison,
            value,
          },
        ],
      });
    }
  };

  const handlerCurrFilter = (name, value) => {
    setCurrFilter({
      ...currFilter,
      [name]: value,
    });
  };

  const handlerClick = () => {
    handlerFilterByNumericValues(currFilter);
    const { column, comparison, value } = currFilter;
    setColumns((prevColumns) => (
      prevColumns.filter((key) => key !== column)
    ));
    switch (comparison) {
    case 'maior que':
      setFilteredData([
        ...data.filter((planet) => (
          parseFloat(planet[column]) > value)),
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
  };

  const handlerChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      handlerFilterByName(name, value);
    } else {
      handlerCurrFilter(name, value);
    }
  };

  const context = {
    columns,
    currFilter,
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
