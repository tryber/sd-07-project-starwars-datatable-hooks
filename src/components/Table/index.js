import React, { useContext, useEffect, useState } from 'react';
import { StarWarsContext } from '../../providers/StarWarsProvider';

const Table = () => {
  const { data, filters: { filterByName, filterByNumericValues } } = useContext(StarWarsContext);
  const [dataFiltered, setDataFiltered] = useState(data);

  useEffect(() => {
    setDataFiltered(data.filter(({ name }) => name.includes(filterByName.name)));
  }, [data, filterByName.name]);

  const filterButton = () => {
    setDataFiltered(data.filter((info) => {
      const { comparasion, column, value } = filterByNumericValues[0];

      switch (comparasion) {
      case 'maior que':
        if (info[column] === 'unknown') return false;
        return Number(info[column]) > Number(value);
      case 'menor que':
        if (info[column] === 'unknown') return false;
        return Number(info[column]) < Number(value);
      case 'igual a':
        return info[column] === value;
      default:
        return null;
      }
    }));
  };

  return (
    <>
      <button
        data-testid="button-filter"
        type="button"
        onClick={ filterButton }
      >
        Filtrar
      </button>
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
    </>
  );
};

export default Table;
