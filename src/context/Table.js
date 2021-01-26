import React, { useContext } from 'react';
import StarWarsContext from './StarWarsContext';
import SearchBar from './SearchBar';

function Table() {
  const { data, filterData } = useContext(StarWarsContext);
  const ZERO = 0;
  const tableHeade = (property) => {
    for (let i = ZERO; i <= property.length; i += 1) {
      if (property !== 'residents') return (<th key={ property }>{ property }</th>);
    }
  };

  const tableBody = () => { // referência Carol Andrade
    if (filterData.length > ZERO) {
      return filterData;
    }
    return data;
  };

  return (
    <div>
      <SearchBar />
      <table>
        <thead>
          <tr>
            {
              data.length > ZERO ? Object.keys(data[0])
                .map(tableHeade) : (<th>Loading...</th>)
            }
          </tr>
        </thead>
        <tbody>
          { data ? tableBody().map((body) => (
            <tr key={ body.name }>
              <td>{ body.name }</td>
              <td>{ body.rotation_period }</td>
              <td>{ body.orbital_period }</td>
              <td>{ body.diameter }</td>
              <td>{ body.climate }</td>
              <td>{ body.gravity }</td>
              <td>{ body.terrain }</td>
              <td>{ body.surface_water }</td>
              <td>{ body.population }</td>
              <td>{ body.films }</td>
              <td>{ body.created }</td>
              <td>{ body.edited }</td>
              <td>{ body.url }</td>
            </tr>
          )) : (<th>Loading...</th>)}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
