const getPlanets = () => {
  const URL = 'https://swapi-trybe.herokuapp.com/api/planets/';
  return fetch(URL)
    .then((response) => response.json())
    .then(({ results }) => {
      results.forEach((result) => delete result.residents);
      return results;
    })
    .catch((error) => error);
};

export default getPlanets;
