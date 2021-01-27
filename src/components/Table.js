import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../providers/StarWarsProviders';

const Table = () => {
  const {
    data,
    filters: { filterByName, filterByNumericValue },
    setOptions,
  } = useContext(StarWarsContext);
  const [backupData, setBackupData] = useState([data]);

  useEffect(() => {
    setBackupData(data.filter(({ name }) => name.includes(filterByName.name)));
  }, [data, filterByName.name]);

  function filterTable() {
    setBackupData(
      backupData.filter((planet) => {
        const { comparison, column, value } = filterByNumericValue[0];
        setOptions((currData) => currData.filter((option) => column !== option));

        switch (comparison) {
        case 'maior que':
          if (planet[column] === 'unknown') return false;
          return +(planet[column]) > (value);
        case 'menor que':
          if (planet[column] === 'unknown') return false;
          return +(planet[column]) < (value);
        case 'igual a':
          return (planet[column] === value);
        default:
          return planet;
        }
      }),
    );
  }

  return (
    <div>
      <button data-testid="button-filter" type="button" onClick={ filterTable }>
        Filtrar
      </button>
      <table>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Rotação</th>
            <th>Orbita</th>
            <th>Diametro</th>
            <th>Clima</th>
            <th>Gravidade</th>
            <th>Tipo de solo</th>
            <th>Água na superfice</th>
            <th>População</th>
            <th>Residente</th>
            <th>Filmes</th>
            <th>Criado</th>
            <th>Editado</th>
          </tr>
        </thead>
        <tbody>
          {backupData.map((planet, index) => (
            <tr key={ index }>
              <td>{planet.name}</td>
              <td>{planet.rotation_period}</td>
              <td>{planet.orbital_period}</td>
              <td>{planet.diameter}</td>
              <td>{planet.climate}</td>
              <td>{planet.gravity}</td>
              <td>{planet.terrain}</td>
              <td>{planet.surface_water}</td>
              <td>{planet.population}</td>
              <td>{planet.residents}</td>
              <td>{planet.films}</td>
              <td>{planet.created}</td>
              <td>{planet.edited}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
