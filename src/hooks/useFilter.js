import { useState, useEffect } from 'react';
// import getApi from '../Services/SWPlanetsAPI';

useFilter = () => {
  const [planets, setPlanets] = useState({});

  useEffect( async () => {
    const results = await fetch('https://swapi-trybe.herokuapp.com/api/planets/')
      .then((response) => response.json())
      .then(planApi => planApi.results)
  }, []);

  return [];
}

export default useFilter;