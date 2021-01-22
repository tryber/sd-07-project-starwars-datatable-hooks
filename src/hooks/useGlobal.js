import { useState, useEffect } from 'react';
import getPlanet from '../services/starWarsAPI';

const useGlobal = () => {
  const [planets, setPlanets] = useState([]);
  const [loading, setLoaing] = useState(true);
  const [filter, setFilter] = useState('');

  async function handlePlants() {
    const recivedPlnets = await getPlanet();
    setPlanets(recivedPlnets);
    setLoaing(false);
  }

  useEffect(() => {
    handlePlants();
  }, []);

  const handleFilter = () => {
    let filtered = planets;
    if (filter !== '') {
      filtered = planets.filter((planet) => planet.name.includes(filter));
      return filtered;
    }
    return filtered;
  };

  const globalState = {
    filters: handleFilter(),
    isLoading: loading,
  };

  return [globalState, setFilter];
};

export default useGlobal;
