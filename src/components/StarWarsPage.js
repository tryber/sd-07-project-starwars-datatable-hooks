import React, { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import StarWarsTable from './StarWarsTable';
import FormStarWars from './FormStarWars';

export default function StarWarsPage() {
  const { fetchPlanets, isFetching } = useContext(StarWarsContext);

  useEffect(() => {
    fetchPlanets();
  });

  return (
    <div>
      <FormStarWars />
      {!isFetching && <StarWarsTable /> }
      {isFetching && <div>Loading</div>}
    </div>
  );
}
