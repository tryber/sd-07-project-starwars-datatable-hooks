import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from './StarWarsContext';
import StarWarsAPI from '../services/StarWarsAPI';

const StarWarsProvider = ({ children }) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const getPlanets = await StarWarsAPI();
    setData(getPlanets);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const tablePlanets = (planet) => {
    const { name, diameter, climate,
      gravity, terrain, population, created, edited, films, url } = planet;

    return (
      <tr>
        <td>{ name }</td>
        <td>{ planet.rotation_period }</td>
        <td>{ planet.orbital_period }</td>
        <td>{ diameter }</td>
        <td>{ climate }</td>
        <td>{ gravity }</td>
        <td>{ terrain }</td>
        <td>{ planet.surface_water }</td>
        <td>{ population }</td>
        <td>{ created }</td>
        <td>{ edited }</td>
        <td>{ films }</td>
        <td>{ url }</td>
      </tr>
    );
  };

  const context = {
    fetchData,
    data,
    tablePlanets,
  };
  return (
    <StarWarsContext.Provider value={ context }>
      {children}
    </StarWarsContext.Provider>
  );
};

export default StarWarsProvider;

StarWarsProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
