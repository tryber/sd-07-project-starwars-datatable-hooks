import { useContext, useEffect } from 'react';
import StarWarsContext from '../context/StarWarsContext';
import getPlanets from '../services/swAPI';

const RequestData = () => {
  const { setData } = useContext(StarWarsContext);

  useEffect(() => {
    async function fetchPlanets() {
      const response = await getPlanets();
      setData(response);
    }
    fetchPlanets();
  }, [setData]);

  return null;
};

export default RequestData;
