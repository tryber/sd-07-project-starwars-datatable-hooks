import React, { useContext, useEffect } from 'react';
import PlanetsContext from '../context/PlanetsContext';

function Table() {
  const { planets, setPlanets } = useContext(PlanetsContext);
  useEffect(() => setPlanets('XABLAU USING EFFECT'));
  return (
    <div>
      { planets }
    </div>
  );
}

export default Table;
