import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import getPlanets from '../services/planetsAPI';

const { Provider } = StarWarsContext;

function StarWarsProvider({ children }) {
  const initialFilter = {
    filterByName: '',
  };

  const [isFetching, setIsFetching] = useState(false);

  const [header, setHeader] = useState();

  const [data, setData] = useState([]);

  const [filter, setFilter] = useState(initialFilter);

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
      const { filterByName } = filter;
      setIsFetching(true);
      const planets = await getPlanets();
      const newData = planets.filter((planet) => planet.name.includes(filterByName));
      setIsFetching(false);
      setData(newData);
    }
    fetchData();
  }, [filter]);

  const handleChangeInputName = (e) => {
    setFilter({
      filterByName: e.target.value,
    });
  };

  const context = {
    isFetching,
    setIsFetching,
    header,
    setHeader,
    data,
    setData,
    getPlanets,
    handleChangeInputName,
  };
  return <Provider value={ context }>{children}</Provider>;
}

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsProvider;
