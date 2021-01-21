import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function TableBody() {
  const { filteredData } = useContext(StarWarsContext);
  return (
    <tbody>
      {filteredData.map((line, index) => (
        <tr key={ index }>
          <td>{line.name}</td>
          <td>{line.rotation_period}</td>
          <td>{line.orbital_period}</td>
          <td>{line.diameter}</td>
          <td>{line.climate}</td>
          <td>{line.gravity}</td>
          <td>{line.terrain}</td>
          <td>{line.surface_water}</td>
          <td>{line.population}</td>
          <td>{line.films}</td>
          <td>{line.created}</td>
          <td>{line.edited}</td>
          <td>{line.url}</td>
        </tr>))}
    </tbody>
  );
}

export default TableBody;
