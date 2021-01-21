import React from 'react';
import PropTypes from 'prop-types';

export default function TableList({ planet }) {
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
}

TableList.propTypes = {
  planet: PropTypes.shape({
    name: PropTypes.string,
    rotation_period: PropTypes.string,
    orbital_period: PropTypes.string,
    diameter: PropTypes.string,
    climate: PropTypes.string,
    gravity: PropTypes.string,
    terrain: PropTypes.string,
    surface_water: PropTypes.string,
    population: PropTypes.string,
    created: PropTypes.string,
    edited: PropTypes.string,
    films: PropTypes.arrayOf(PropTypes.string),
    url: PropTypes.string,
  }).isRequired,
};
