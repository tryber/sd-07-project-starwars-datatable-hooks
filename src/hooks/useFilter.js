import { useEffect } from 'react';

useEffect(() => {
  const { name } = filters.filterByName;

  if (name) {
    const nameFilter = new RegExp(`\\w*${name}\\w*`, 'i');
    const fPlanets = planets.filter((planet) => nameFilter.test(planet.name));
    setFilteredPlanets(fPlanets);
  } else {
    setFilteredPlanets(planets);
  }
}, [filters]);

export default useFilter;
