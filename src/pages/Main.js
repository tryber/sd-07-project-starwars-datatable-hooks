import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';

function Main() {
  const { fetchPlanets, data, dataIsEmpty } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  }, []);

  return (
    <div>
      <h1>Star Wars Planets Database</h1>
      { !dataIsEmpty && <Table data={ data } /> }
      { dataIsEmpty && 'Loading...' }
    </div>
  );
}

export default Main;
