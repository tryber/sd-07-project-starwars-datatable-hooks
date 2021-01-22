import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const { Provider } = StarWarsContext;

function StarWarsProvider({ children }) {
  const initialFilter = {
    filterByName: '',
    filterNumericValues: {
      column: 'population',
      comparison: 'maior que',
      value: '',
      active: false,
    },
  };

  const [isFetching, setIsFetching] = useState(false);

  const [header, setHeader] = useState();

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(initialFilter);

  const handleComparison = (planet, column, comparison, value, active) => {
    if (!column || !comparison || !value || !active) return true;
    const sizePlanet = parseInt(planet[column], 10);
    const valueInt = parseInt(value, 10);

    if (comparison === 'maior que') return sizePlanet > valueInt;

    if (comparison === 'menor que') return sizePlanet < valueInt;
    if (comparison === 'igual a') return sizePlanet === valueInt;
  };

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      const planets = await getPlanets();
      setHeader(Object.keys(planets[0]));
      setData(planets);
      setIsFetching(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      const { filterByName, filterNumericValues } = filter;
      const { column, comparison, value, active } = filterNumericValues;

      setIsFetching(true);
      const planets = await getPlanets();
      // filtros
      const newData = planets.filter(
        (planet) => planet.name.includes(filterByName)
          && handleComparison(planet, column, comparison, value, active),
      );
      setIsFetching(false);
      setData(newData);
    }
    fetchData();
  }, [filter]);

  const handleChangeInputName = (e) => {
    setFilter({
      ...filter,
      filterByName: e.target.value,
    });
  };

  const handleChangeSelect = (e) => {
    const keyOnChange = e.target.name;
    setFilter({
      ...filter,
      filterNumericValues: {
        ...filter.filterNumericValues,
        [keyOnChange]: e.target.value,
      },
    });
  };

  const handleActiveFilter = () => {
    const { filterNumericValues } = filter;
    const { active } = filterNumericValues;
    setFilter({
      ...filter,
      filterNumericValues: {
        ...filterNumericValues,
        active: !active,
      },
    });
  };

  const context = {
    isFetching,
    setIsFetching,
    header,
    setHeader,
    data,
    setData,
    filter,
    setFilter,
    getPlanets,
    handleChangeInputName,
    handleChangeSelect,
    handleActiveFilter,
  };
  return <Provider value={ context }>{children}</Provider>;
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
