const STARWARS_BASE_API = 'https://swapi-trybe.herokuapp.com/';

export const getStarWarsPlanets = () => (
  fetch(`${STARWARS_BASE_API}/api/planets/?format=json`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getStarWarsPlanets;
