import React, { useContext } from 'react';
import { Loading, Table } from '../components';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const { isFetching } = useContext(StarWarsContext);
  return <div>{isFetching ? <Loading /> : <Table />}</div>;
}

export default Planets;
