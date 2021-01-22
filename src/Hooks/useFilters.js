import { useState } from 'react';
// import getApi from '../Services/SWPlanetsAPI';

const useFilter = () => {
  const [planet, useNameFilter] = useState({});
  useNameFilter(planet);
  return (planet);
};

export default useFilter;
