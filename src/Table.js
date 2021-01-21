import React from 'react';
import StarWarsContext from './context/StarWarsContext';
import useFetch from './hooks/useFetch';

const Table = () => {
  const { data, setData } = React.useContext(StarWarsContext);
  const url = 'https://swapi-trybe.herokuapp.com/api/planets/';
  const response = useFetch(url);

  React.useEffect(() => {
    setData(response);
    console.log(data);
  });

  const handleHeaders = () => {
    const header = Object.keys(data[0]).filter((item) => item !== 'residents');
    return header;
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            {data && handleHeaders().map((item) => (
              <th key={ item }>
                { item }
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data && data.map((item) => (
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
