import React, { useContext } from 'react';
import { Table } from 'reactstrap';

import StarWarsContext from '../context/StarWarsContext';

const TableInformation = () => {
  const { filterdPlanets } = useContext(StarWarsContext);
  if (filterdPlanets) {
    return (
      <div>
        <Table dark>
          <thead>
            <tr>
              <th>nome</th>
              <th>periodo de rotação</th>
              <th>periodo orbital</th>
              <th>diâmetro</th>
              <th>clima</th>
              <th>gravidade</th>
              <th>tipo de solo</th>
              <th>Água na superfície</th>
              <th>população</th>
              <th>filmes</th>
              <th>criado</th>
              <th>editadp</th>
              <th>url</th>
            </tr>
          </thead>
          <tbody>
            {filterdPlanets.map(
              ({
                name,
                rotation_period: rotationPeriod,
                orbital_period: orbitalPeriod,
                diameter,
                climate,
                gravity,
                terrain,
                surface_water: surfaceWater,
                population,
                films,
                created,
                edited,
                url,
              }) => (
                <tr key={ name }>
                  <td>{name}</td>
                  <td>{ rotationPeriod }</td>
                  <td>{ orbitalPeriod }</td>
                  <td>{diameter}</td>
                  <td>{climate}</td>
                  <td>{gravity}</td>
                  <td>{terrain}</td>
                  <td>{surfaceWater}</td>
                  <td>{population}</td>
                  <td>{films}</td>
                  <td>{created}</td>
                  <td>{edited}</td>
                  <td>{url}</td>
                </tr>
              ),
            )}
          </tbody>
        </Table>
      </div>
    );
  }
};

export default TableInformation;
