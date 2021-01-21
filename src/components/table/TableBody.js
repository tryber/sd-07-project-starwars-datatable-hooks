import React from 'react';
import PropTypes from 'prop-types';

const TableBody = ({ data }) => {
  const {
    name,
    rotation_period: rotationPeriod,
    orbital_period: orbitalPeriod,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water: surfaceWater,
    population,
    created,
    edited,
    films,
    url } = data;

  return (
    <tr>
      <td>{name}</td>
      <td>{rotationPeriod}</td>
      <td>{orbitalPeriod}</td>
      <td>{diameter}</td>
      <td>{climate}</td>
      <td>{gravity}</td>
      <td>{terrain}</td>
      <td>{surfaceWater}</td>
      <td>{population}</td>
      <td>{created}</td>
      <td>{edited}</td>
      <td>{JSON.stringify(films)}</td>
      <td>{url}</td>
    </tr>
  );
};

TableBody.propTypes = {
  data: PropTypes.shape({
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
    films: PropTypes.instanceOf(Array),
    url: PropTypes.string,
  }).isRequired,
};

export default TableBody;
