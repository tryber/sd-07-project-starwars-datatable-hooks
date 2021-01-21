import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableList from './TableList';

export default function Table() {
  const { planets } = useContext(StarWarsContext);

  console.log(planets);

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
        {planets.map((item) => (<TableList planet={ item } key={ item } />))}
      </tbody>
    </table>
  );
}
