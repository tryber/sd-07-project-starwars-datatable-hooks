import React, { useContext, useEffect, useState } from 'react';
import StarWarsContext from '../../context/StarWarsContext';

function SearchBar() {
  const initialFilter = {
    filter: {
      filterByName: {
        name: '',
      },
    },
  };

  const { dataByFilter,
    setCurrentPlanets } = useContext(StarWarsContext);

  const [filter, setFilter] = useState(initialFilter);

  const handleName = ({ target: { value } }) => {
    setFilter({ filter: { filterByName: { name: value } } });
  };

  useEffect(() => {
    const { filter: { filterByName: { name } } } = filter;
    const filteredByName = dataByFilter.filter((planet) => planet.name.includes(name));

    setCurrentPlanets(filteredByName);
  }, [filter]);

  return (
    <section>
      <input
        placeholder="filtre por nome do planeta"
        type="text"
        data-testid="name-filter"
        onChange={ handleName }
      />
    </section>
  );
}

export default SearchBar;
