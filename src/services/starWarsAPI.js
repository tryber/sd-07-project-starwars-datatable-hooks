const STARWARS_API = 'https://swapi-trybe.herokuapp.com/api/planets';

const fetchPlanets = () => (
  fetch(STARWARS_API)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default fetchPlanets;
