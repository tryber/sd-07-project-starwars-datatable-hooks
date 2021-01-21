import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import TableList from './TableList';

export default function Table() {
  const { planets, text, filterSelect, proportion, number } = useContext(StarWarsContext);

  function proportionCalculate(item) {
    if (proportion === 'maior que') {
      return item[filterSelect] > number;
    } if (proportion === 'menor que') {
      return item[filterSelect] < number;
    } return item[filterSelect] === number;
  }

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
          // .filter((item) => item.name.includes(text))
          .filter((item) => proportionCalculate(item))
          .map((item) => (<TableList planet={ item } key={ item } />))}
      </tbody>
    </table>
  );
}
