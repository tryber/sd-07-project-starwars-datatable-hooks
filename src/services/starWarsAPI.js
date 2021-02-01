const endpoint = 'https://swapi-trybe.herokuapp.com/api/planets/';

const requestPlanets = async () => {
  const { results } = await fetch(endpoint)
    .then((response) => response.json());
  return results;
};

export default requestPlanets;
