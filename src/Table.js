import React from 'react';
import StarWarsContext from './context/StarWarsContext';

const Table = () => {
  const { data, filters: { filterByName: { name } } } = React.useContext(StarWarsContext);

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data
            && Object.keys(data[0]).filter((item) => item !== 'residents').map((item) => (
              <th key={ item }>
                { item }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.filter((item) => item.name.toLowerCase().includes(name))
            .map((item) => (
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
              </tr>))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
