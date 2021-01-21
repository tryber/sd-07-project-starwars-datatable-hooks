import React from 'react';
import fetchPlanets from '../services/fetchPlanets';

function Table() {
  const getPlanets = async () => {
    const data = await fetchPlanets();
    return data.results;
  };

  return (
    <div>
      Tabela de planetas
      {console.log(getPlanets())}
    </div>
  );
}

export default Table;
