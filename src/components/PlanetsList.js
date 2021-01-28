import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

const PlanetsList = () => {
  const { data } = useContext(StarWarsContext);

  return (
    <table>
      <tr>
        <th>Nome</th>
        <th>Período de rotação</th>
        <th>Período de translação</th>
        <th>Diâmetro</th>
        <th>Clima </th>
        <th>Gravidade </th>
        <th>Biomas</th>
        <th>Superfície de água</th>
        <th>População</th>
        <th>Filmes</th>
        <th>Data de criação</th>
        <th>Data de Edição</th>
        <th>URL</th>
      </tr>
      { data.map((item) => (
        <tr key={ item.name }>
          <td>{item.name}</td>
          <td>{+item.rotation_period}</td>
          <td>{+item.orbital_period}</td>
          <td>{+item.diameter}</td>
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
    </table>
  );
};

export default PlanetsList;
