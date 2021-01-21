import React from 'react';
import PropTypes from 'prop-types';
import TableLine from './TableLine';

const Tabela = ({ planets }) => (
  <table className="ui ceeled table">
    <thead className="ui ceeled header">
      <tr className="ui ceeled row">
        <th className="ui ceeled cell">Nome</th>
        <th className="ui ceeled cell">Dia</th>
        <th className="ui ceeled cell">Ano</th>
        <th className="ui ceeled cell">Diâmetro</th>
        <th className="ui ceeled cell">Clima</th>
        <th className="ui ceeled cell">Gravidade</th>
        <th className="ui ceeled cell">Terreno</th>
        <th className="ui ceeled cell">Agua na Superfície</th>
        <th className="ui ceeled cell">População</th>
        <th className="ui ceeled cell">Criado</th>
        <th className="ui ceeled cell">Editado</th>
        <th className="ui ceeled cell">Filmes</th>
        <th className="ui ceeled cell">URL</th>
      </tr>
    </thead>
    <tbody className="ui ceeled body">
      {planets.map((planet) => (<TableLine planet={ planet } key={ planet.name } />))}
    </tbody>
  </table>
);

Tabela.propTypes = {
  planets: PropTypes.instanceOf(Array),
}.isRequired;

export default Tabela;
