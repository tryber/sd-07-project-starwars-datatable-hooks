import React from 'react';
import PropTypes from 'prop-types';

function Table({ planets }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Climate</th>
            <th>Created</th>
            <th>Diameter</th>
            <th>Edited</th>
            <th>Films</th>
            <th>Gravity</th>
            <th>Orbital Period</th>
            <th>Population</th>
            <th>Residents</th>
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
          </tr>
        </thead>
        <tbody>
          {planets.map((planet, index) => {
            const {
              name,
              climate,
              created,
              diameter,
              edited,
              films,
              gravity,
              orbital_period: ob,
              population,
              residents,
              rotation_period: rp,
              surface_water: sw,
              terrain,
            } = planet;
            return (
              <tr key={ index }>
                <td>{ name }</td>
                <td>{ climate }</td>
                <td>{ created }</td>
                <td>{ diameter }</td>
                <td>{ edited }</td>
                <td>{ films }</td>
                <td>{ gravity }</td>
                <td>{ ob }</td>
                <td>{ population }</td>
                <td>{ residents }</td>
                <td>{ rp }</td>
                <td>{ sw }</td>
                <td>{ terrain }</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;

Table.propTypes = {
  planets: PropTypes.arrayOf(PropTypes.shape({})),
};
Table.defaultProps = {
  planets: PropTypes.arrayOf(PropTypes.shape({})),
};
