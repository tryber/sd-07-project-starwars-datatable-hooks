import React, { useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import Table from '../components/Table';

function HomePage() {
  const { data, setFilters } = useContext(StarWarsContext);
  return (
    <div>
      <input
        type="text"
        onChange={ ({ target }) => setFilters({
          filterByName: { name: target.value },
        }) }
      />
      {data ? <Table /> : <p>Loading...</p>}
    </div>
  );
}

export default HomePage;
