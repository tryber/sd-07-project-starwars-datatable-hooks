import React, { useContext } from 'react';
import StarWarsContext from '../context/StartWarsContext';

function Table() {
  const { data } = useContext(StarWarsContext);
  // console.log('data', data);
  return (
    <table>
      <thead>
        <tr>
          <th>Clima</th>
          <th>Data de Criação</th>
          <th>Diâmetro</th>
          <th>Editado</th>
          <th>Filmes</th>
          <th>Gravidade</th>
          <th>Nome</th>
          <th>Período Orbital</th>
          <th>População</th>
          <th>Período de Rotação</th>
          <th>Água da Superfície</th>
          <th>Terreno</th>
          <th>URL</th>
        </tr>
      </thead>
      {/* {console.log('segundo', data)} */}
      {data.map((planet) => planet.name)}
      <tbody>
        {
          data.map((planet) => {
            const {
              climate,
              created,
              diameter,
              edited,
              films,
              gravity,
              name,
              orbital_period: orbitalPeriod,
              population,
              rotation_period: rotationPeriod,
              surface_water: surfaceWater,
              terrain,
              url,
            } = planet;
            return (
              <tr key={ name }>
                <td>{ climate }</td>
                <td>{ created }</td>
                <td>{ diameter }</td>
                <td>{ edited }</td>
                <td>{ films }</td>
                <td>{ gravity }</td>
                <td>{ name }</td>
                <td>{ orbitalPeriod }</td>
                <td>{ population }</td>
                <td>{ rotationPeriod }</td>
                <td>{ surfaceWater }</td>
                <td>{ terrain }</td>
                <td>{ url }</td>
              </tr>
            );
          })
        }
        <td>Editar/Excluir</td>
      </tbody>
    </table>
  );
}

export default Table;
