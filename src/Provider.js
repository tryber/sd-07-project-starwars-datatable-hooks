import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import planetsApi from './services/planetsApi';

const { Provider } = StarWarsContext;
const ASC = 'ASC';
const DESC = 'DESC';

export default function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [filteredPlanets, setFilteredPlanets] = useState();
  const [filterByNumericValues, setFilterByNumericValues] = useState([]);
  const [order, setOrder] = useState({
    column: 'name',
    sort: ASC,
  });

  const sortPlanets = (array) => {
    let sortedArray = [...array];
    const { column, sort } = order;
    const greater = 1;
    const less = -1;
    const equal = 0;

    if (+sortedArray[0][column]) {
      sortedArray = sortedArray.map((planet) => ({
        ...planet, [column]: +planet[column],
      }));
    }

    if (sort === ASC) {
      sortedArray.sort((a, b) => {
        if (a[column] > b[column]) {
          return greater;
        } if (a[column] < b[column]) {
          return less;
        }
        return equal;
      });
    } else if (sort === DESC) {
      sortedArray.sort((a, b) => {
        if (a[column] < b[column]) {
          return greater;
        } if (a[column] > b[column]) {
          return less;
        }
        return equal;
      });
    }

    return sortedArray;
  };

  const fetchPlanets = async () => {
    const planets = await planetsApi();
    const sortedPlanets = sortPlanets(planets);

    setData(planets);
    setFilteredPlanets(sortedPlanets);
  };

  const filterNameOnchange = (name) => {
    if (data && name !== '') {
      const filteredData = data.filter((planet) => planet.name.includes(name));
      setFilteredPlanets(filteredData);
    } else {
      setFilteredPlanets(data);
    }
  };

  const filterPlanets = () => {
    if (!data) return;

    setFilteredPlanets(data);

    filterByNumericValues.forEach((filter) => {
      const { column, comparison, value } = filter;

      if (comparison === 'maior que') {
        setFilteredPlanets(
          (prevPlanets) => prevPlanets.filter((planet) => +value < +planet[column]),
        );
      } else if (comparison === 'menor que') {
        setFilteredPlanets(
          (prevPlanets) => prevPlanets.filter((planet) => +value > +planet[column]),
        );
      } else {
        setFilteredPlanets(
          (prevPlanets) => prevPlanets.filter((planet) => +value === +planet[column]),
        );
      }
    });
  };

  const removeFilter = (column) => {
    setFilterByNumericValues(
      filterByNumericValues.filter((filter) => filter.column !== column),
    );
  };

  useEffect(() => {
    filterPlanets();
  }, [filterByNumericValues]);

  useEffect(() => {
    fetchPlanets();
  }, []);

  const context = {
    filteredPlanets,
    filterByNumericValues,
    removeFilter,
    filterNameOnchange,
    setFilterByNumericValues,
    setOrder,
    sortPlanets,
    setFilteredPlanets,
  };

  return (
    <Provider value={ context }>
      { children }
    </Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
