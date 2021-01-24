import { useState, useEffect } from 'react';
import getPlanet from '../services/starWarsAPI';

const useGlobal = () => {
  const [results, setResults] = useState(['']);
  const [loading, setLoading] = useState(true);
  const [filteredName, setFilteredName] = useState('');
  const [filters, setFilters] = useState({
    filterByName: { name: '' },
    filterByNumericValues: [],
    order: { column: 'name', sort: 'ASC' },
  });

  useEffect(() => {
    const getPlanets = async () => {
      const planets = await getPlanet().then((data) => data.results);
      planets.filter((info) => delete info.residents);
      setResults(planets);
      setLoading(false);
    };
    getPlanets();
  }, []);

  const globalState = {
    results,
    filters,
    loading,
    setFilters,
    filteredName,
    setFilteredName,
  };
  return globalState;
};

export default useGlobal;
