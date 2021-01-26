import { useState, useEffect, useContext } from 'react';
import StarWarsContext from '../context/StarWarsContext';
// import getApi from '../Services/useApi';

const useFilter = () => {
  const { planets } = useContext(StarWarsContext);
  const [filteredPlanets, setFilteredPlanets] = useState({});
  const [filter, setFilter] = useState({
    filters: {
      filterByName: {
        name: '',
      },
    },
  });
  // const [active, setActive] = useState([]);

  useEffect(() => {
    const { name } = filter.filters.filterByName;
    if (name) {
      const nameFilter = new RegExp(`\\w*${name}\\w*`, 'i');
      const fPlanets = planets.filter((planet) => nameFilter.test(planet.name));
      setFilteredPlanets(fPlanets);
    }
  }, [filter]);

  // useEffect(() => {}, [filters]);
  // useEffect(() => {}, [filters]);

  return [filteredPlanets, setFilter];
};

export default useFilter;
