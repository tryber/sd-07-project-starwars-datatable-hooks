import React, { useContext } from 'react';
import { Context } from '../context/StarWarsContext';
import NameFilter from './NameFilter';
import MultipleFilter from './MultipleFilter';

function Table() {
  const { data, filteredData } = useContext(Context);
  // console.log(Object.keys(data));
  const arrayEmpty = 0;
  let showAll;
  if (filteredData.length === arrayEmpty) {
    showAll = true;
  } else {
    showAll = false;
  }
  // console.log(data);
  // console.log(filteredData);
  // console.log(filteredData.length);
  return (
    <div>
      <NameFilter />
      <MultipleFilter />
      <table>
        <thead>
          {/* { data && keysData.map(
          (item) => (
            <th key={ item }>{item}</th>
          ),
        )} */}
          <tr>
            <th>Name</th>
            <th>Rotation Orbid</th>
            <th>Orbital Period</th>
            <th>Diameter</th>
            <th>Climate</th>
            <th>Gravity</th>
            <th>Terrain</th>
            <th>Surface</th>
            <th>Population</th>
            <th>Films</th>
            <th>Created</th>
            <th>Edited</th>
            <th>Url</th>
          </tr>
        </thead>
        <tbody>
          {
            showAll
              ? data.map(
                (item) => (
                  <tr key={ item.name }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                    <td>{item.films}</td>
                    <td>{item.created}</td>
                    <td>{item.edited}</td>
                    <td>{item.url}</td>
                  </tr>

                ),
              )
              : filteredData.map(
                (item) => (
                  <tr key={ item.name }>
                    <td>{item.name}</td>
                    <td>{item.rotation_period}</td>
                    <td>{item.orbital_period}</td>
                    <td>{item.diameter}</td>
                    <td>{item.climate}</td>
                    <td>{item.gravity}</td>
                    <td>{item.terrain}</td>
                    <td>{item.surface_water}</td>
                    <td>{item.population}</td>
                    <td>{item.films}</td>
                    <td>{item.created}</td>
                    <td>{item.edited}</td>
                    <td>{item.url}</td>
                  </tr>

                ),
              )
          }

        </tbody>
      </table>
    </div>
  );
}

export default Table;
