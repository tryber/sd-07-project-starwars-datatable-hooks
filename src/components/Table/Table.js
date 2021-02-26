import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import StarWarsContext from '../../context/StarWarsContext';
import TableLine from './TableLine';

const Tabela = () => {
  const { planets, filters } = useContext(StarWarsContext);
  const zero = 0;
  const one = 1;
  const oneLess = -1;
  const compare = (a, b) => {
    const populationA = (a) ? parseInt(a[filters.order.column], 10) : a;
    const populationB = (b) ? parseInt(b[filters.order.column], 10) : b;

    if (filters.order.sort === 'EQ') return zero;

    if (populationA < populationB) return filters.order.sort === 'ASC' ? one : oneLess;

    if (populationA > populationB) return filters.order.sort === 'ASC' ? oneLess : one;

    return zero;
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nome</th>
          <th>Dia</th>
          <th>Ano</th>
          <th>Diâmetro</th>
          <th>Clima</th>
          <th>Gravidade</th>
          <th>Terreno</th>
          <th>Agua na Superfície</th>
          <th>População</th>
          <th>Criado</th>
          <th>Editado</th>
          <th>Filmes</th>
          <th>URL</th>
        </tr>
      </thead>
      <tbody>
        {planets
          .sort(compare)
          .filter((planet) => planet.name
            .toLowerCase()
            .includes(filters.filterByName.name.toLowerCase()))
          .map((planet) => (
            <TableLine planet={ planet } key={ planet.name } />
          ))}
      </tbody>
    </table>
  );
};

Tabela.propTypes = {
  planets: PropTypes.instanceOf(Array),
}.isRequired;

export default Tabela;
