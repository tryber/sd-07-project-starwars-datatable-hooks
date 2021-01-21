import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';

export default function Table() {
  const data = useContext(StarWarsContext);

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Periodo de rotação</th>
          <th>Período de órbita</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Água da superfície</th>
          <th>População</th>
          <th>Residentes</th>
          <th>Filmes</th>
          <th>Criado em</th>
          <th>Editado em</th>
        </tr>
      </thead>
      <tbody>

        {
          data.planets ? data.planets.results.map((planet) => {
            const {
              name,
              rotation_period: rotationPeriod,
              orbital_period: orbitalPeriod,
              diameter,
              climate,
              gravity,
              terrain,
              surface_water: surfaceWater,
              population,
              residents,
              films,
              created,
              edited,
            } = planet;

            return (
              <tr key={ name }>
                <td>{name}</td>
                <td>{rotationPeriod}</td>
                <td>{orbitalPeriod}</td>
                <td>{diameter}</td>
                <td>{climate}</td>
                <td>{gravity}</td>
                <td>{terrain}</td>
                <td>{surfaceWater}</td>
                <td>{population}</td>
                <td>{residents}</td>
                <td>{films}</td>
                <td>{created}</td>
                <td>{edited}</td>
              </tr>
            );
          }) : <tr><td>vazio</td></tr>
        }
      </tbody>
    </table>
  );
}
