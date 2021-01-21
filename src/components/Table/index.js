import React, { useContext } from 'react';
import { StarWarsContext } from '../../providers/StarWarsProvider';

const Table = () => {
  const { data, filters: { filterByName } } = useContext(StarWarsContext);
  let dataFiltered = data;

  if (filterByName.name) {
    dataFiltered = data.filter(({ name }) => name.includes(filterByName.name));
  }

  return (
    <table>
      <thead>
        <tr>
          <th>Planeta</th>
          <th>Periodo de rotação</th>
          <th>Periodo em orbita</th>
          <th>Diametro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Filmes</th>
          <th>Criado em</th>
          <th>Editado em</th>
          <th>Mais informações</th>
        </tr>
      </thead>
      <tbody>
        { dataFiltered.map((info) => (
          <tr key={ info.name }>
            <td>{info.name}</td>
            <td>{info.rotation_period}</td>
            <td>{info.orbital_period}</td>
            <td>{info.diameter}</td>
            <td>{info.climate}</td>
            <td>{info.gravity}</td>
            <td>{info.terrain}</td>
            <td>{info.surface_water}</td>
            <td>{info.population}</td>
            <td>{info.films.map((film) => film)}</td>
            <td>{info.created}</td>
            <td>{info.edited}</td>
            <td>{info.url}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
