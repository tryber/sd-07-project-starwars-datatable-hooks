import React, { useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';

export default function StarWars() {
  const { fetchData, data } = useContext(StarWarsContext);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div>
      <Table />
    </div>
  );
}
