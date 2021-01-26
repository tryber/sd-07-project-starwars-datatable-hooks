import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

function Table() {
  const { filters, activateFilters } = useContext(StarWarsContext);
  const { name } = filters.filterByName;
  // console.log(data);
  // console.log(filters)

  return (
    <div>
      <h2>Table</h2>
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
            <th>Rotation Period</th>
            <th>Surface Water</th>
            <th>Terrain</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {activateFilters().filter((item) => item.name.toLowerCase()
            .includes(name.toLowerCase()))
            .map((item, index) => (
              <tr key={ index }>
                <td>{ item.name }</td>
                <td>{ item.climate }</td>
                <td>{ item.created }</td>
                <td>{ item.diameter }</td>
                <td>{ item.edited }</td>
                <td>{ item.films }</td>
                <td>{ item.gravity }</td>
                <td>{ item.orbital_period }</td>
                <td>{ item.population }</td>
                <td>{ item.rotation_period }</td>
                <td>{ item.surface_water }</td>
                <td>{ item.terrain }</td>
                <td>{ item.url }</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
export default Table;
