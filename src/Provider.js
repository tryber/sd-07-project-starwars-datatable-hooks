import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './context/StarWarsContext';
import planetsApi from './services/planetsApi';

const { Provider } = StarWarsContext;
export default function StarWarsProvider({ children }) {
  const [data, setData] = useState();
  const [filterByName, setFilterByName] = useState({
    name: '',
  });
  const [filterByNumericValues, setFilterByNumericValues] = useState([
    {
      column: 'population',
      comparison: 'maior que',
      value: '',
    },
  ]);

  const fetchPlanets = async () => {
    const planets = await planetsApi();
    setData(planets);
  };

  const handleChange = (name) => {
    setFilterByName({
      ...filterByName,
      name,
    });
  };

  const handleNumericValues = (name, value) => {
    setFilterByNumericValues((prevState) => (
      [
        {
          ...prevState[0],
          [name]: value,
        },
      ]
    ));
  };

  const filterValuesOnClick = () => {
    if (!data) return;
    const lastIndex = filterByNumericValues.length - 1;
    const { column, comparison, value } = filterByNumericValues[lastIndex];

    if (comparison === 'maior que') {
      const filteredPlanets = data.filter((planet) => +value < +planet[column]);
      setData(filteredPlanets);
    } else if (comparison === 'menor que') {
      const filteredPlanets = data.filter((planet) => +value > +planet[column]);
      setData(filteredPlanets);
    } else {
      const filteredPlanets = data.filter((planet) => +value === +planet[column]);
      setData(filteredPlanets);
    }
  };

  useEffect(() => {
    const { name } = filterByName;

    if (data && name !== '') {
      const filteredData = data.filter((planet) => planet.name.includes(name));
      setData(filteredData);
    } else {
      fetchPlanets();
    }
  }, [filterByName]);

  const context = {
    data,
    handleChange,
    handleNumericValues,
    filterValuesOnClick,
    filterByName,
    filterByNumericValues,
  };

  return (
    <Provider value={ context }>
      { children}
    </Provider>
  );
}

StarWarsProvider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};
