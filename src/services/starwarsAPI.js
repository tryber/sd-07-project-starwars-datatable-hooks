const ENDPOINT = 'https://swapi-trybe.herokuapp.com/api/planets/';

export const getPlanetsStarWars = () => (
  fetch(ENDPOINT)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getPlanetsStarWars;
