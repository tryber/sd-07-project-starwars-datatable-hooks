import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../context/StarWarsContext';

function RowPlanet({ planet }) {
  const { allColumns } = useContext(StarWarsContext);
  return (
    <tr>
      {allColumns.map((column) => (
        <td
          key={ column }
          data-testid={ `planet-${column}` }
        >
          { planet[column] }
        </td>
      ))}
    </tr>
  );
}

RowPlanet.propTypes = { planet: PropTypes.shape({
  name: PropTypes.string.isRequired,
  rotation_period: PropTypes.string.isRequired,
  orbital_period: PropTypes.string.isRequired,
  diameter: PropTypes.string.isRequired,
  climate: PropTypes.string.isRequired,
  gravity: PropTypes.string.isRequired,
  terrain: PropTypes.string.isRequired,
  surface_water: PropTypes.string.isRequired,
  population: PropTypes.string.isRequired,
  residents: PropTypes.arrayOf.isRequired,
  films: PropTypes.arrayOf.isRequired,
  created: PropTypes.string.isRequired,
  edited: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}).isRequired };

export default RowPlanet;
