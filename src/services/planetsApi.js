const Url = 'https://swapi-trybe.herokuapp.com/api/planets/';

const getCurrencePlanets = () => (
  fetch(Url)
    .then((response) => (
      response.json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default getCurrencePlanets;
