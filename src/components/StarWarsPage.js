import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import StarWarsTable from './StarWarsTable';

export default function StarWarsPage() {
  const { fetchPlanets, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  });

  return (
    <div>
      {!isFetching && <StarWarsTable /> }
      {isFetching && <div>Loading</div>}
    </div>
  );
}
