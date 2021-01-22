const STARWARS_PLANETS_ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getStarWarsPlanets = () => (
  fetch(STARWARS_PLANETS_ENDPOINT)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promisses.resolve(json) : Promise.reject(json)))
    ))
);

export default getStarWarsPlanets;
