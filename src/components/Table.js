import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import SWContext from '../context/Context';

export default function Table({ data }) {
  const {
    filters: { order },
  } = useContext(SWContext);

  const [orderedData, setOrderedData] = useState([]);
  useEffect(() => {
    const handleOrder = () => {
      const MENOS_UM = -1;
      let pos = 1;
      let neg = MENOS_UM;
      const ZERO = 0;
      if (order.sort !== 'asc') {
        pos = MENOS_UM;
        neg = 1;
      }
      const copyDataofCopy = [...data];
      console.log(order.column);
      if (Number.isNaN(Number(copyDataofCopy[0][order.column]))) {
        copyDataofCopy.sort((a, b) => {
          if (a[order.column].toLowerCase() < b[order.column].toLowerCase()) return neg;
          if (a[order.column].toLowerCase() > b[order.column].toLowerCase()) return pos;
          return ZERO;
        });
      } else {
        copyDataofCopy.sort(
          (a, b) => Number(b[order.column]) - Number(a[order.column]),
        );
      }

      setOrderedData(copyDataofCopy);
    };
    handleOrder();
  }, [data, order]);
  return (
    <table>
      <thead>
        <tr>
          <th>name</th>
          <th>rotation_period</th>
          <th>orbital_period</th>
          <th>diameter</th>
          <th>climate</th>
          <th>gravity</th>
          <th>terrain</th>
          <th>surface_water</th>
          <th>population</th>
          <th>films</th>
          <th>created</th>
          <th>edited</th>
          <th>url</th>
        </tr>
      </thead>
      <tbody>
        {orderedData.map((planet) => (
          <tr key={ planet.name }>
            <td data-testid="planet-name">{planet.name}</td>
            <td>{planet.rotation_period}</td>
            <td>{planet.orbital_period}</td>
            <td>{planet.diameter}</td>
            <td>{planet.climate}</td>
            <td>{planet.gravity}</td>
            <td>{planet.terrain}</td>
            <td>{planet.surface_water}</td>
            <td>{planet.population}</td>
            <td>{planet.films}</td>
            <td>{planet.created}</td>
            <td>{planet.edited}</td>
            <td>{planet.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

Table.propTypes = {
  data: PropTypes.func.isRequired,
};
