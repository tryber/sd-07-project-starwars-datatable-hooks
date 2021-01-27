import React, { useContext } from 'react';
import { Loading, Table, Search } from '../components';
import StarWarsContext from '../context/StarWarsContext';

function Planets() {
  const { isFetching } = useContext(StarWarsContext);
  return (
    <div>
      {' '}
      <Search />
      {isFetching ? <Loading /> : <Table />}
    </div>
  );
}

export default Planets;
