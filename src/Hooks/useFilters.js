import { useState, useEffect } from 'react';
// import getApi from '../Services/SWPlanetsAPI';

function useFilter() {
  const [planet] = useState({});

  useEffect(() => {}, []);
  useNameFilter(planet);
  return planet;
}

export default useFilter;
