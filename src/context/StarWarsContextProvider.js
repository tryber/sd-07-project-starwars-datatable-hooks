import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';

function StarWarsContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [inputName, setInputName] = useState('');
  const [filterdPlanets, setFilteredPlanets] = useState([]);
  useEffect(() => {
    const fetchPlanets = async () => {
      const response = await fetch('https://swapi-trybe.herokuapp.com/api/planets/');
      const planetsList = await response.json();
      setData(planetsList.results);
      setFilteredPlanets(planetsList.results);
    };
    fetchPlanets();
  }, []);

  useEffect(() => {
    const filter = data
      .filter(({ name }) => name.includes(inputName));
    setFilteredPlanets(filter);
  }, [data, inputName]);

  return (
    <StarWarsContext.Provider
      value={ {
        data,
        inputName,
        setInputName,
        filterdPlanets,
      } }
    >
      {children}
    </StarWarsContext.Provider>
  );
}

StarWarsContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default StarWarsContextProvider;
